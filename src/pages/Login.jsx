import "react";
import { Helmet } from "react-helmet";

const Login = () => {
    /*const [ user, setUser ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    console.log(user);

    if(user){
        const authCheck = () => 
            _ApiHandler({
                method : 'GET',
                url : `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            });
        
        const { isLoading, error, data :authUser } = UseApiGet("authUser", authCheck);
        
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {JSON.stringify(error.message)}</div>;

        console.log(authUser);
    }
    */

    const handleLogin = (e) => {
        e.preventDefault;
        window.location.href = "http://localhost:5000/google";
    }

    //accessToken ? navigate('/') : navigate('/login');

    return (
        <div>
            <Helmet>
                <title>Ayuna Admin</title>
                {/* plugins:css */}
                <link rel="stylesheet" href="../../../vendors/feather/feather.css" />
                <link rel="stylesheet" href="../../../vendors/ti-icons/css/themify-icons.css" />
                <link rel="stylesheet" href="../../../vendors/css/vendor.bundle.base.css" />
                {/* endinject */}
                {/* Plugin css for this page */}
                <link rel="stylesheet" href="../../../vendors/mdi/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="../../../vendors/datatables.net-bs4/dataTables.bootstrap4.css" />
                <link rel="stylesheet" href="../../../vendors/ti-icons/css/themify-icons.css" />
                <link rel="stylesheet" type="../../../text/css" href="js/select.dataTables.min.css" />
                <link rel="stylesheet" href="../../../vendors/select2/select2.min.css" />
                <link rel="stylesheet" href="../../../vendors/select2-bootstrap-theme/select2-bootstrap.min.css" />
                {/* End plugin css for this page */}
                {/* inject:css */}
                <link rel="stylesheet" href="../../../css/vertical-layout-light/style.css" />
                {/* endinject */}
                <link rel="stylesheet" href="../../../css/ayuna/overLapping.css" />
            </Helmet>
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                    <img src="../../images/logo-black.svg" alt="logo" />
                    </div>
                    <h4>Ahlan wa Sahlan</h4>
                    <h6 className="font-weight-light">aaaaa</h6>
                    <form className="pt-3">
                    <div className="form-group">
                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleLogin}>Sign in with Google 🚀 </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
            {/* content-wrapper ends */}
        </div>
        {/* page-body-wrapper ends */}
        </div>
        <Helmet>
            <script src="../../../vendors/js/vendor.bundle.base.js"></script>
            <script src="../../../vendors/chart.js/Chart.min.js"></script>
            <script src="../../../vendors/datatables.net/jquery.dataTables.js"></script>
            <script src="../../../vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>
            <script src="../../../js/dataTables.select.min.js"></script>
            <script src="../../../vendors/typeahead.js/typeahead.bundle.min.js"></script>
            <script src="../../../vendors/select2/select2.min.js"></script>
            <script src="../../../js/off-canvas.js"></script>
            <script src="../../../js/hoverable-collapse.js"></script>
            <script src="../../../js/template.js"></script>
            <script src="../../../js/settings.js"></script>
            <script src="../../../js/todolist.js"></script>
            <script src="../../../js/dashboard.js"></script>
            <script src="../../../js/Chart.roundedBarCharts.js"></script>

            <script src="../../../js/file-upload.js"></script>
            <script src="../../../js/typeahead.js"></script>
        </Helmet>
    </div>

    );
}

export default Login;