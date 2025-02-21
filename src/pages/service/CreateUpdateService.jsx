import { useEffect, useRef, useState } from 'react';
import Form from '../../components/admin/Form';
import FormInput from '../../components/admin/InputForm';
import SelectForm from '../../components/admin/SelectForm';
import InputFileForm from '../../components/admin/InputFileForm';
import { _ApiHandler } from '../../utils/ApiHandler';
import { UseApiGet, UseApiSend } from '../../utils/QueryMutation';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function CreateUpdateService() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New Service');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [submitted, setSubmitted] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const [initialValues2, setInitialValues2] = useState({
    service:'',
    image:'',
    status:'',
  });
  const inputFile = useRef();
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();
  const options = {
    active :"active",
    inactive: "inactive"
  };


  const getService = () => _ApiHandler({
    method : 'GET',
    url : `/service/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/service',
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
    const { service, status } = form;
    const formData = new FormData();
    formData.set("service", service);
    formData.set("status", status);
    formData.append("image", inputFile.current.files[0]);

    if(!submitted){
      mutate(formData);
      setSubmitted(true);
    }
  };
    
    
    const {  isLoading } = UseApiGet("serviceById", getService,{
      enabled : true,
      onSuccess:(res)=>{
        console.log(res);
        if(res.status <= 400){
          const initValues = {
            service:  res.data.data.service || '',
            image: res.data.data.image || '',
            status: res.data.data.status || ''
          };
          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit service');
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

    if (initialValues2.service) {
      const initialValues = {
        service : initialValues2.service || '',
        image : initialValues2.image || '',
        status : initialValues2.status || ''
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/service/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }
    
    setMessage('');
    
  },[initialValues2.status, initialValues2.service, initialValues2.image, isLoading, validatedId]);


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
                        label="Layanan" 
                        name="service"/>
                      <InputFileForm 
                        label="Logo" 
                        name="image"
                        innerRef={inputFile}
                        className="file-upload-default"/>
                      <SelectForm 
                        data = {options}
                        label="Status" 
                        name="status"
                        className="form-control" />
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

export default CreateUpdateService;