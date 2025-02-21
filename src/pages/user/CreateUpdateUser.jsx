import { useEffect, useState } from 'react';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import Form from '../../components/admin/Form';
import FormInput from '../../components/admin/InputForm';
import { _ApiHandler } from '../../utils/ApiHandler';
import { UseApiGet, UseApiSend } from '../../utils/QueryMutation';
import { useParams } from 'react-router-dom';

function CreateUpdateUser() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New User');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [loadForm, setLoadForm] = useState(false);
  const [initialValues2, setInitialValues2] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();


  const getUser = () => _ApiHandler({
    method : 'GET',
    url : `/user/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/user',
    data 
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
    mutate(form);
  };
    
    
    const {  isLoading } = UseApiGet("userById", getUser,{
      enabled : true,
      onSuccess:(res)=>{
        //console.log(res);
        if(res.status <= 400){
          const initValues = {
            firstName:  res.data.data.firstName || '',
            lastName: res.data.data.lastName || '',
            email: res.data.data.email || ''
          };
          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit User');
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

    if (initialValues2.firstName) {
      const initialValues = {
        firstName : initialValues2.firstName || '',
        lastName : initialValues2.lastName || '',
        email : initialValues2.email || ''
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/user/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }
    
    setMessage('');
    
  },[initialValues2.email, initialValues2.firstName, initialValues2.lastName, isLoading, validatedId]);


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
                        label="First Name" 
                        name="firstName"
                        value={initialValues2.firstName} />
                      <FormInput 
                        label="Last Name" 
                        name="lastName"
                        value={initialValues2.lastName} />
                      <FormInput 
                        label="Email Address" 
                        type="email" 
                        name="email"
                        value={initialValues2.email} />
                    </Form>
                  }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUpdateUser;