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

function CreateUpdateProject() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New Project');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [submitted, setSubmitted] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const [options, setOptions] = useState({});
  const [dataError, setDataError] = useState(null);
  const [initialValues2, setInitialValues2] = useState({
    serviceId:'',
    project_name:'',
    progress:0,
    customer:'',
    budget_plan:'',
    status:''
  });
  const inputFile = useRef();
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();
  const statusOptions = {
    active :"Active",
    pending : "Pending",
    inactive: "Inactive"
  };

  const getService = () => _ApiHandler({
    method : 'GET',
    url : '/service',
  });

  
  const getProject = () => _ApiHandler({
    method : 'GET',
    url : `/project/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/project',
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
      setDataError(error.message);
    }
  )
  if (isPending) {
    setMessage("Data in progress . . .");
  }


  const submit = (form) => {
    const { serviceId, project_name, progress, customer, status  } = form;
    const formData = new FormData();
    formData.set("userId", getCookie("id"));
    formData.set("serviceId", serviceId);
    formData.set("project_name", project_name);
    formData.set("progress", progress);
    formData.set("customer", customer);
    formData.append("image", inputFile.current.files[0]);
    formData.set("status", status);

    if(!submitted){
      mutate(formData);
      setSubmitted(true);
    }
  };
    
    
    const {  isLoading } = UseApiGet("projectById", getProject,{
      enabled : true,
      onSuccess:(res)=>{
        console.log(res);
        if(res.status <= 400){
          const initValues = {
            serviceId:res.data.data.serviceId || 0,
            project_name:res.data.data.project_name || '',
            progress:res.data.data.progress || '',
            customer:res.data.data.customer || '',
            budget_plan:res.data.data.budget_plan || '',
            status:res.data.data.status || '',
          };

          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit project');
        }else{
          setDataError(res.data.message||'');
        }
        
        setLoadForm(true);
      },
      onError : (err) => {
        setDataError(JSON.stringify(err));
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
        }else{
          setDataError(res.data.message);
        }
        
        setLoadForm(true);
      },
      onError : (err) => {
        console.log(err);
        setDataError(JSON.stringify(err));
      }
    });

  useEffect(()=>{
    if (isLoading || serviceLoading) {
      setMessage("Data in progress . . .");
    }

    if (initialValues2.project) {
      const initialValues = {
        serviceId:initialValues2.serviceId || 0,
        project_name:initialValues2.project_name || '',
        progress:initialValues2.progress || '',
        customer:initialValues2.customer || '',
        budget_plan:initialValues2.budget_plan || '',
        status:initialValues2.status || '',
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/project/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }

    
    setMessage('');
    
  },[initialValues2.category, initialValues2.description, initialValues2.project, initialValues2.image, initialValues2.title, isLoading, serviceLoading, validatedId, initialValues2.serviceId, initialValues2.project_name, initialValues2.progress, initialValues2.customer, initialValues2.budget_plan, initialValues2.status]);



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
                        label="Nama Proyek" 
                        name="project_name"/>
                      <FormInput 
                        label="Progress Kerja" 
                        name="progress"
                        type="range"/>
                      <FormInput 
                        label="Pelanggan" 
                        name="customer"/>
                      <InputFileForm 
                        label="RAB" 
                        name="budget_plan"
                        innerRef={inputFile}
                        className="file-upload-default"/>
                      <SelectForm 
                        data = {statusOptions}
                        label="Status" 
                        name="status"
                        className="form-control" />
                    </Form>
                  }
                  {dataError && <div className="alert alert-danger"> {dataError} </div>}
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

export default CreateUpdateProject;