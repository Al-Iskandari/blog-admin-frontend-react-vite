import { useEffect, useRef, useState } from 'react';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import Form from '../../components/admin/Form';
import FormInput from '../../components/admin/InputForm';
import InputFileForm from '../../components/admin/InputFileForm';
import { _ApiHandler, getCookie } from '../../utils/ApiHandler';
import { UseApiGet, UseApiSend } from '../../utils/QueryMutation';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function CreateUpdateAbout() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New About');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [submitted, setSubmitted] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const [initialValues2, setInitialValues2] = useState({
    about:'',
    image:''
  });
  const inputFile = useRef();
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();
  const getAbout = () => _ApiHandler({
    method : 'GET',
    url : `/about/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/about',
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
    const { about } = form;
    const formData = new FormData();
    formData.set("userId", getCookie('id'));
    formData.set("about", about);
    formData.append("image", inputFile.current.files[0]);
    if(!submitted){
      mutate(formData);
      setSubmitted(true);
    }
  };
    
    
    const {  isLoading } = UseApiGet("aboutById", getAbout,{
      enabled : true,
      onSuccess:(res)=>{
        console.log(res);
        if(res.status <= 400){
          const initValues = {
            about:  res.data.data.about || '',
            image: res.data.data.image || ''
          };
          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit about');
        }
        
        setLoadForm(true);
      },
      onError : (err) => {
        console.log(err);
        setMessage(JSON.stringify(err));
      }
    });

  useEffect(()=>{
    if (isLoading) {
      setMessage("Data in progress . . .");
    }

    if (initialValues2.about) {
      const initialValues = {
        about : initialValues2.about || '',
        image : initialValues2.image || ''
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/about/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }
    
    setMessage('');
    
  },[initialValues2.status, initialValues2.about, initialValues2.image, isLoading, validatedId]);


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
                      <FormInput 
                        label="Tentang" 
                        name="about"/>
                      <InputFileForm 
                        label="Logo" 
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

export default CreateUpdateAbout;