import { useEffect, useRef, useState } from 'react';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import Form from '../../components/admin/Form';
import FormInput from '../../components/admin/InputForm';
import SelectForm from '../../components/admin/SelectForm';
import InputFileForm from '../../components/admin/InputFileForm';
import { _ApiHandler, getCookie } from '../../utils/ApiHandler';
import { UseApiGet, UseApiSend } from '../../utils/QueryMutation';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function CreateUpdateBlog() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New Blog');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [submitted, setSubmitted] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const [options, setOptions] = useState({});
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [initialValues2, setInitialValues2] = useState({
    serviceId:'',
    title:'',
    content:'',
    image:'',
    tag:''
  });
  const inputFile = useRef();
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();

  const getService = () => _ApiHandler({
    method : 'GET',
    url : '/service',
  });

  
  const getBlog = () => _ApiHandler({
    method : 'GET',
    url : `/blog/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/blog',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  const fn = isAddMode ? createPost : updatePost.action;

  const { mutate, isPending } = UseApiSend(
    fn,
    (response) => {
      console.log(response);
      setMessage(response.data.message);
    },
    (error) => {
      setMessage(error.message);
    }
  )
  if (isPending) {
    setMessage("Data in progress . . .");
  }

  const submit = (form) => {
    const { serviceId, title, tag  } = form;
    const contentState = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    const titleSplit = title.split(' ');
    const formData = new FormData();
    formData.set("userId", getCookie("id"));
    formData.set("serviceId", serviceId);
    formData.set("title", title);
    formData.set("content", contentState);
    formData.append("image", inputFile.current.files[0]);
    formData.set("tag", tag);
    formData.set("slug", titleSplit.length > 1 ?`${title.replaceAll(' ','-')}.html` : `${title}.html`);

    if(!submitted){
      mutate(formData);
      setSubmitted(true);
    }
  };
    
    
    const {  isLoading } = UseApiGet("blogById", getBlog,{
      enabled : true,
      onSuccess:(res)=>{
        console.log(res);
        if(res.status <= 400){
          const initValues = {
            serviceId:res.data.data.serviceId || 0,
            title:res.data.data.title || '',
            content:res.data.data.content || '',
            image:res.data.data.image || '',
            tag:res.data.data.tag || '',
          };

          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit blog');
        }
        
        setLoadForm(true);
      },
      onError : (err) => {
        console.log(err);
        setMessage(JSON.stringify(err));
      }
    });

    const {  isLoading:serviceLoading } = UseApiGet("services", getService,{
      enabled : true,
      onSuccess:(res)=>{
        console.log(res);
        if(res.status <= 400){
          const choices = res.data.data;
          const dataOptions = choices.reduce((o, value) => ({ ...o, [value.id]: value.service}), {});
          setOptions(dataOptions);
        }
        
        setLoadForm(true);
      },
      onError : (err) => {
        console.log(err);
        setMessage(JSON.stringify(err));
      }
    });

  useEffect(()=>{
    if (isLoading || serviceLoading) {
      setMessage("Data in progress . . .");
    }

    if (initialValues2.blog) {
      const initialValues = {
        serviceId:initialValues2.serviceId || 0,
        title:initialValues2.title || '',
        content:initialValues2.content || '',
        image:initialValues2.image || '',
        tag:initialValues2.tag || '',
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/blog/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }
    
    setMessage('');
    
  },[initialValues2.category, initialValues2.description, initialValues2.blog, initialValues2.image, initialValues2.title, isLoading, serviceLoading, validatedId, initialValues2.serviceId, initialValues2.blog_name, initialValues2.progress, initialValues2.customer, initialValues2.budget_plan, initialValues2.status, initialValues2.content, initialValues2.tag]);


  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{formTitle}</h4>
                    <p className="card-description">{message}</p>
                    { loadForm &&
                    <Form submit={submit} initialValues={initialValues2}>
                      <SelectForm 
                        data = {options}
                        label="Layanan" 
                        name="serviceId"
                        className="form-control" />
                      <FormInput 
                        label="Judul" 
                        name="title"/>
                      <Editor
                        defaultEditorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                      />
                      <InputFileForm 
                        label="Poster" 
                        name="image"
                        innerRef={inputFile}
                        className="file-upload-default"/>
                      <FormInput 
                        label="Tagar" 
                        name="tag" />
                    </Form>
                  }
                </div>
            </div>
        </div>
      </div>
      <Helmet>
      <script src="../../../js/file-upload.js"></script>
      <script src="../../../js/select2.js"></script>
    </Helmet>
    </div>
  );
}

export default CreateUpdateBlog;