import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = () => {
  
  return (
    <div>
        <Helmet>
            <title>Home | Ayuna</title>
            <link rel="stylesheet" href="../../css/ayuna/style.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
            <link href="https://npmcdn.com/flickity@2/dist/flickity.css" rel="stylesheet"  crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" crossOrigin="anonymous"></script>
            <script src="https://npmcdn.com/flickity@2/dist/flickity.pkgd.js" crossOrigin="anonymous"></script>
            
        </Helmet>
      <div className="utama">
        <Header />
            <main>
              <Outlet />
              <Footer />
            </main>
      </div>
      <Helmet>
        <script src="../../js/ayuna/utils.js"></script>
      </Helmet>
    </div>
  );
};


export default Layout;