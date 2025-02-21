import "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © {new Date().getFullYear()}.</span>
            </div>
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Inovated with <i className="ti-heart text-danger ml-1" /> by <a href="https://www.digital.ayuna.com/" target="_blank">Ayuna Digital</a></span> 
            </div>
         </footer>

    );
}

export default Footer;