import { useEffect, useState } from 'react';
import Form from '../../components/admin/Form';
import FormInput from '../../components/admin/InputForm';
import SelectForm from '../../components/admin/SelectForm';
import { _ApiHandler, getCookie } from '../../utils/ApiHandler';
import { UseApiGet, UseApiSend } from '../../utils/QueryMutation';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function CreateUpdateSection() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New Section');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [submitted, setSubmitted] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const [options, setOptions] = useState({});
  const [initialValues2, setInitialValues2] = useState({
    serviceId:0,
    section:'',
    status:'',
  });
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();
  const statusOptions = {
    active :"active",
    inactive: "inactive"
  };

  const getService = () => _ApiHandler({
    method : 'GET',
    url : '/service',
  });


  const getSection = () => _ApiHandler({
    method : 'GET',
    url : `/section/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/section',
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
    const { serviceId, section, status } = form;
    const formData = new FormData();
    formData.set("userId", getCookie('id'));
    formData.set("serviceId", serviceId);
    formData.set("section", section);
    formData.set("status", status);
    if(!submitted){
      mutate(formData);
      setSubmitted(true);
    }
  };
    
    
    const {  isLoading } = UseApiGet("sectionById", getSection,{
      enabled : true,
      onSuccess:(res)=>{
        console.log(res);
        if(res.status <= 400){
          const initValues = {
            serviceId:  res.data.data.serviceId || '',
            section:  res.data.data.section || '',
            status: res.data.data.status || ''
          };
          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit section');
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

    if (initialValues2.section) {
      const initialValues = {
        serviceId : initialValues2.serviceId || '',
        section : initialValues2.section || '',
        status : initialValues2.status || ''
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/section/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }
    
    setMessage('');
    
  },[initialValues2.status, initialValues2.section, initialValues2.image, isLoading, validatedId, serviceLoading, initialValues2.serviceId]);


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
                        label="Seksi Halaman" 
                        name="section"/>
                      <SelectForm 
                        data = {statusOptions}
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

export default CreateUpdateSection;