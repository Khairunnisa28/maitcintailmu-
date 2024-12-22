import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/navbar.css';

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            style={{
                width: '100%',
                backgroundColor: '#f8f9fa', // Sesuaikan warna
                borderBottom: '1px solid #ddd',
            }}
        >
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={Logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    <span className="ms-2 text-dark fw-bold">MA IT Cinta Ilmu</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Beranda
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Profil MA IT
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/sejarah">Sejarah</Link></li>
                                <li><Link className="dropdown-item" to="/Visi-misi">Visi & Misi</Link></li>
                                <li><Link className="dropdown-item" to="/MutuSekolah">Jaminan Mutu Sekolah</Link></li>
                                <li><Link className="dropdown-item" to="/Unggulan">Program Unggulan</Link></li>
                                <li><Link className="dropdown-item" to="/Program">Program-program</Link></li>
                                <li><Link className="dropdown-item" to="/Ekstrakurikuler">Ekstrakurikuler</Link></li>
                                <li><Link className="dropdown-item" to="/Fasilitas">Fasilitas</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Berita
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/Prestasi">Prestasi</Link></li>
                                <li><Link className="dropdown-item" to="/Galeri">Galeri</Link></li>
                                <li><Link className="dropdown-item" to="/Event">Event</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                PPDB
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/PPDB">PPDB</Link></li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSf1ZBt7-vdPZUbb43NEjab291SqV3juOnVd7jDA-1aF0rIKow/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Daftar Sekarang
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
