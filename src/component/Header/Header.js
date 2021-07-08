import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className="container-fluid">
            <h1 className="text-center">Assesment Project</h1>
            <div class="nav-background ">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className=" ">
                        <Link to="/registration" className="nav-link">USER REGISTRATION</Link>
                        <Link to="/post" className="nav-link">POSTS</Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </section>

    );
};

export default Header;