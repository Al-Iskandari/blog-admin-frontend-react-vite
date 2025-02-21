import "react";
import { Link, useLocation } from "react-router-dom";

const LeftSidebar = () => {
    const location = useLocation();
    const { pathname } = location;
    const currentRoute = pathname.split("/");
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <li className={currentRoute[2]==="" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/admin/">
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Dashboard</span>
            </Link>
            </li>
            <li className={currentRoute[2]==="about" ? "nav-item active" : "nav-item"}>
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i className="icon-layout menu-icon" />
                <span className="menu-title">Data Umum</span>
                <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                    <li className={currentRoute[2]==="user" ? "nav-item active" : "nav-item"}> <Link to="/admin/user" className="nav-link">Anggota</Link></li>
                    <li className={currentRoute[2]==="about" ? "nav-item active" : "nav-item"}> <Link className="nav-link" to="/admin/about">Tentang Ayuna</Link></li>
                    <li className={currentRoute[2]==="section" ? "nav-item active" : "nav-item"}> <Link className="nav-link" to="/admin/section">Kategori Halaman</Link></li>
                    <li className={currentRoute[2]==="service" ? "nav-item active" : "nav-item"}> <Link className="nav-link" to="/admin/service">Layanan</Link></li>
                </ul>
            </div>
            </li>
            <li className={currentRoute[2]==="gallery" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/admin/gallery">
                <i className="icon-image menu-icon" />
                <span className="menu-title">Galeri Foto</span>
            </Link>
            </li>
            <li className={currentRoute[2]==="blog" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/admin/blog">
                <i className="mdi mdi-blogger menu-icon" />
                <span className="menu-title">Blog</span>
            </Link>
            </li>
            <li className={currentRoute[2]==="project" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/admin/project">
                <i className="mdi mdi-shape-plus menu-icon" />
                <span className="menu-title">Proyek</span>
            </Link>
            </li>
            <li className={currentRoute[2]==="testimony" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/admin/testimony">
                <i className="mdi mdi-comment-account-outline menu-icon" />
                <span className="menu-title">Testimoni</span>
            </Link>
            </li>
        </ul>
        </nav>

    );
};

export default LeftSidebar;