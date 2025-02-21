import 'react';

const Header = () => {
    return(
        <header>
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-transparent">
            <div className="container">
            <a className="navbar-brand" href="#">
                <img src="../../../images/ayuna/logo-white.svg" alt="Ayuna" width="auto" height={25} />
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#">Tentang Kami</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Layanan</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Testimoni</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Galeri</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Kontak</a>
                </li>
                </ul>
                <form className="d-flex my-2 my-lg-0 ms-100">
                <input className="form-control me-sm-2 cari" type="text" placeholder="Search" />
                </form>
            </div>
            </div>
        </nav>
        </header>
    );
}

export default Header;