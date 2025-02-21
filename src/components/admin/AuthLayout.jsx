import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import RightSidebar from './Right_sidebar';
import LeftSidebar from './Left_sidebar';
import Footer from './Footer';
import { ProtectedRoute } from '../../utils/AuthRoute';
import { Helmet } from 'react-helmet';

const AuthLayout = () => {
  
  return (
    <div>
    <Helmet>
        <title>Ayuna Admin</title>
        {/* plugins:css */}
        <link rel="stylesheet" href="../../vendors/feather/feather.css" />
        <link rel="stylesheet" href="../../vendors/ti-icons/css/themify-icons.css" />
        <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css" />
        {/* endinject */}
        {/* Plugin css for this page */}
        <link rel="stylesheet" href="../../vendors/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="../../vendors/datatables.net-bs4/dataTables.bootstrap4.css" />
        <link rel="stylesheet" href="../../vendors/ti-icons/css/themify-icons.css" />
        <link rel="stylesheet" type="../../text/css" href="js/select.dataTables.min.css" />
        <link rel="stylesheet" href="../../vendors/select2/select2.min.css" />
        <link rel="stylesheet" href="../../vendors/select2-bootstrap-theme/select2-bootstrap.min.css" />
        {/* End plugin css for this page */}
        {/* inject:css */}
        <link rel="stylesheet" href="../../css/vertical-layout-light/style.css" />
        {/* endinject */}
        <link rel="stylesheet" href="../../css/ayuna/overLapping.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
        <script src="../../vendors/js/vendor.bundle.base.js" defer></script>
        <script src="../../vendors/chart.js/Chart.min.js" defer></script>
        <script src="../../vendors/datatables.net/jquery.dataTables.js" defer></script>
        <script src="../../vendors/datatables.net-bs4/dataTables.bootstrap4.js" defer></script>
        <script src="../../js/dataTables.select.min.js" defer></script>
        <script src="../../vendors/typeahead.js/typeahead.bundle.min.js" defer></script>
        <script src="../../vendors/select2/select2.min.js" defer></script>
        <script src="../../js/off-canvas.js" defer></script>
        <script src="../../js/hoverable-collapse.js" defer></script>
        <script src="../../js/template.js" defer></script>
        <script src="../../js/settings.js" defer></script>
        <script src="../../js/todolist.js" defer></script>
        <script src="../../js/dashboard.js" defer></script>
        <script src="../../js/Chart.roundedBarCharts.js" defer></script>

        <script src="../../js/file-upload.js" defer></script>
        <script src="../../js/typeahead.js" defer></script>
    </Helmet>
    <ProtectedRoute>
      <div className="container-scroller">
        <Navigation />
        <div className="container-fluid page-body-wrapper"> 
        <RightSidebar />
            <LeftSidebar />
            <div className="main-panel">
              <Outlet />
              <Footer />
            </div>
        </div>
      </div>
    </ProtectedRoute>
  </div>
  );
};


export default AuthLayout;