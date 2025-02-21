import { useEffect, useRef, useState } from 'react';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import Form from '../../components/admin/Form';
import FormInput from '../../components/admin/InputForm';
import SelectForm from '../../components/admin/SelectForm';
import InputFileForm from '../../components/admin/InputFileForm';
import { _ApiHandler, getCookie } from '../../utils/ApiHandler';
import { UseApiGet, UseApiSend } from '../../utils/QueryMutation';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function CreateUpdateGallery() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New Gallery');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [submitted, setSubmitted] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const [options, setOptions] = useState({});
  const [initialValues2, setInitialValues2] = useState({
    category:0,
    title:'',
    description:'',
    image:'',
  });
  const inputFile = useRef();
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();
  const getService = () => _ApiHandler({
    method : 'GET',
    url : '/service',
  });

  
  const getGallery = () => _ApiHandler({
    method : 'GET',
    url : `/gallery/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/gallery',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  const fn = isAddMode ? createPost : updatePost.action;

  const { mutate, isPending } = UseApiSend(
    fn,
    (response) => {
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
    const { category, title, description } = form;
    const formData = new FormData();
    formData.set("userId", getCookie("id"));
    formData.set("category", category);
    formData.set("title", title);
    formData.set("description", description);
    formData.append("image", inputFile.current.files[0]);
    if(!submitted){
      mutate(formData);
      setSubmitted(true);
    }
  };
    
    
    const {  isLoading } = UseApiGet("galleryById", getGallery,{
      enabled : true,
      onSuccess:(res)=>{
        if(res.status <= 400){
          const initValues = {
            category:res.data.data.category || 0,
            title:res.data.data.title || '',
            description:res.data.data.description || '',
            image:res.data.data.image || '',
          };
          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit gallery');
        }
        
        setLoadForm(true);
      },
      onError : (err) => {
        setMessage(JSON.stringify(err));
      }
    });

    const {  isLoading:serviceLoading } = UseApiGet("services", getService,{
      enabled : true,
      onSuccess:(res)=>{
        if(res.status <= 400){
          const choices = res.data.data;
          const dataOptions = choices.reduce((o, value) => ({ ...o, [value.id]: value.service}), {});
          setOptions(dataOptions);
        }
        
        setLoadForm(true);
      },
      onError : (err) => {
        setMessage(JSON.stringify(err));
      }
    });

  useEffect(()=>{
    if (isLoading || serviceLoading) {
      setMessage("Data in progress . . .");
    }

    if (initialValues2.gallery) {
      const initialValues = {
        category:initialValues2.category || 0,
        title:initialValues2.title || '',
        description:initialValues2.description || '',
        image:initialValues2.image || '',
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/gallery/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }
    
    setMessage('');
    
  },[initialValues2.category, initialValues2.description, initialValues2.gallery, initialValues2.image, initialValues2.title, isLoading, serviceLoading, validatedId]);

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
                        label="Kategori" 
                        name="category"
                        className="form-control" />
                      <FormInput 
                        label="Judul" 
                        name="title"/>
                      <FormInput 
                        label="Deskripsi" 
                        name="description"/>
                      <InputFileForm 
                        label="Image" 
                        name="image"
                        innerRef={inputFile}
                        className="file-upload-default"/>
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

export default CreateUpdateGallery;