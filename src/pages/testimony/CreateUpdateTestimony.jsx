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

function CreateUpdateTestimony() {
  const [message, setMessage] = useState('');
  const [formTitle, setFormTitle] = useState('Add New Testimony');
  const [validatedId, setValidatedID] = useState(undefined);
  const [updatePost, setUpdatePost] = useState({action:null});
  const [submitted, setSubmitted] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const [options, setOptions] = useState({});
  const [initialValues2, setInitialValues2] = useState({
    serviceId:'',
    product_image:'',
    customer:'',
    customer_company:'',
    customer_image:'',
    statement:'',
    rating:''
  });
  const inputFile = useRef();
  const inputFile2 = useRef();
  const {id} = useParams();
  const isAddMode = !id;

  //const navigate = useNavigate();
  const getService = () => _ApiHandler({
    method : 'GET',
    url : '/service',
  });

  
  const getTestimony = () => _ApiHandler({
    method : 'GET',
    url : `/testimony/${id}`,
  });

  
  const createPost = (data) => _ApiHandler({
    method: 'POST',
    url: '/testimony',
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
    const { serviceId, customer, customer_company, statement, rating  } = form;
    const formData = new FormData();
    formData.set("userId", getCookie("id"));
    formData.set("serviceId", serviceId);
    formData.append("product_image", inputFile.current.files[0]);
    formData.set("customer", customer);
    formData.set("customer_company", customer_company);
    formData.append("customer_image", inputFile2.current.files[0]);
    formData.set("statement", statement);
    formData.set("rating", rating);

    if(!submitted){
      mutate(formData);
      setSubmitted(true);
    }
  };
    
    
    const {  isLoading } = UseApiGet("testimonyById", getTestimony,{
      enabled : true,
      onSuccess:(res)=>{
        console.log(res);
        if(res.status <= 400){
          const initValues = {
            serviceId:res.data.data.serviceId || 0,
            product_image:res.data.data.product_image || '',
            customer:res.data.data.customer || '',
            customer_company:res.data.data.customer_company || '',
            customer_image:res.data.data.customer_image || '',
            statement:res.data.data.statement || '',
            rating:res.data.data.rating || '',
          };

          setValidatedID(res.data.data.id);
          setInitialValues2(initValues);
          setFormTitle('Edit Testimony');
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

    if (initialValues2.testimony) {
      const initialValues = {
        serviceId:initialValues2.serviceId || 0,
        product_image:initialValues2.product_image || '',
        customer:initialValues2.customer || '',
        customer_company:initialValues2.customer_company || '',
        customer_image:initialValues2.customer_image || '',
        statement:initialValues2.statement || '',
        rating:initialValues2.rating || '',
      }

      setInitialValues2(initialValues);
    }

    if(validatedId){
      const update = (data) => _ApiHandler({
        method: 'PUT',
        url: `/testimony/${validatedId}`,
        data 
      });
  
      setUpdatePost({action:update});
    }
    
    setMessage('');
    
  },[initialValues2.category, initialValues2.description, 
    initialValues2.testimony, initialValues2.image, 
    initialValues2.title, isLoading, serviceLoading, 
    validatedId, initialValues2.serviceId, 
    initialValues2.testimony_name, initialValues2.progress, 
    initialValues2.customer, initialValues2.budget_plan, 
    initialValues2.status, initialValues2.product_image, 
    initialValues2.customer_company, initialValues2.customer_image, 
    initialValues2.statement, initialValues2.rating]);

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
                      <InputFileForm 
                        label="Gambar Produk" 
                        name="product_image"
                        innerRef={inputFile}
                        className="file-upload-default"/>
                      <FormInput 
                        label="Pelanggan" 
                        name="customer"/>
                      <FormInput 
                        label="Perusahaan Pelanggan" 
                        name="customer_company"/>
                      <InputFileForm 
                        label="Foto Pelanggan" 
                        name="customer_image"
                        innerRef={inputFile2}
                        className="file-upload-default"/>
                      <FormInput 
                        label="Pernyataan" 
                        name="statement"/>
                      <FormInput 
                        label="Rating" 
                        name="rating"
                        type="range"/>
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

export default CreateUpdateTestimony;