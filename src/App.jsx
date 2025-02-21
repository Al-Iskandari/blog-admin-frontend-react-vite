import AuthLayout from './components/admin/AuthLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Route, Routes   } from 'react-router-dom';
import { About, Blog, Gallery, Project, Section, Service, Testimony, User,
  CreateUpdateAbout, CreateUpdateBlog, CreateUpdateGallery, CreateUpdateProject,
  CreateUpdateSection, CreateUpdateService, CreateUpdateTestimony, CreateUpdateUser } 
  from "./pages"
import { ProtectedRoute } from './utils/AuthRoute';
import Layout from './components/user/Layout';
import Home from './components/user/Home';
import { Suspense } from 'react';



function App() {
    return (
      <Suspense fallback={<div>Loading Page</div>}>
        <Routes>
          <Route path="login" element={<Login />} /> 

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          
          <Route path="/admin" element={<AuthLayout />}>
            <Route index element={<ProtectedRoute>  <Dashboard /></ProtectedRoute>} />
            <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />    
            <Route path="create-about" element={<ProtectedRoute><CreateUpdateAbout /></ProtectedRoute>} />  
            <Route path="create-about/:id" element={<ProtectedRoute><CreateUpdateAbout /></ProtectedRoute>} />  
            <Route path="user" element={<ProtectedRoute><User /></ProtectedRoute>} />    
            <Route path="create-user" element={<ProtectedRoute><CreateUpdateUser /></ProtectedRoute>} />  
            <Route path="create-user/:id" element={<ProtectedRoute><CreateUpdateUser /></ProtectedRoute>} />
            <Route path="section" element={ <ProtectedRoute><Section /></ProtectedRoute> } />    
            <Route path="create-section" element={ <ProtectedRoute><CreateUpdateSection /></ProtectedRoute> } />  
            <Route path="create-section/:id" element={ <ProtectedRoute><CreateUpdateSection /></ProtectedRoute> } />  
            <Route path="service" element={ <ProtectedRoute><Service /></ProtectedRoute> } />
            <Route path="create-service" element={ <ProtectedRoute><CreateUpdateService /></ProtectedRoute> } />
            <Route path="create-service/:id" element={ <ProtectedRoute><CreateUpdateService /></ProtectedRoute> } />
            <Route path="gallery" element={ <ProtectedRoute><Gallery /></ProtectedRoute> } />
            <Route path="create-gallery" element={ <ProtectedRoute><CreateUpdateGallery /></ProtectedRoute> } />
            <Route path="create-gallery/:id" element={ <ProtectedRoute><CreateUpdateGallery /></ProtectedRoute> } />
            <Route path="blog" element={ <ProtectedRoute><Blog /></ProtectedRoute> } />
            <Route path="create-blog" element={ <ProtectedRoute><CreateUpdateBlog /></ProtectedRoute> } />
            <Route path="create-blog/:id" element={ <ProtectedRoute><CreateUpdateBlog /></ProtectedRoute> } />
            <Route path="project" element={ <ProtectedRoute><Project /></ProtectedRoute> } />
            <Route path="create-project" element={ <ProtectedRoute><CreateUpdateProject /></ProtectedRoute> } />
            <Route path="create-project/:id" element={ <ProtectedRoute><CreateUpdateProject /></ProtectedRoute> } />
            <Route path="testimony" element={ <ProtectedRoute><Testimony /></ProtectedRoute> } />
            <Route path="create-testimony" element={ <ProtectedRoute><CreateUpdateTestimony /></ProtectedRoute> } />
            <Route path="create-testimony/:id" element={ <ProtectedRoute><CreateUpdateTestimony /></ProtectedRoute> } />
          </Route>
        </Routes>
      </Suspense>
    );
};

export default App
