import React from 'react';
import '@styles/Navbar.scss';
import face from '@icons/facew.png'
import insta from '@icons/instagramw.png'
import wapp from '@icons/wappw.png'

const Navbar = ({ menuState }) => {


  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-1 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <span data-feather="home" className="align-text-bottom" />
                Configuracion 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <span data-feather="home" className="align-text-bottom" />
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file" className="align-text-bottom" />
                Etiquetas
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-dark d-flex d-md-none justify-content-center align-items-center text-white d-flex col-12"
          style={{ position: 'absolute', bottom: '0', height: '40px', fontWeight: 'bold' }}>
          Sign-out
        </div>
      </nav>

    </>
  );
}

export default Navbar;