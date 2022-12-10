import React from 'react'
import face from '@icons/face.png'
import insta from '@icons/instagram.png'
import wapp from '@icons/wapp.png'
import logo from '@logos/logoNegro.png';
import '@styles/Footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="col-12 m-0 bg-light shadow footer">
                <footer className="d-flex flex-wrap justify-content-around align-items-center p-4 border-top" style={{height: '150px'}}>
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-muted">© 2011 Synergy Real Estate</span>
                    </div>
                    <Link
                            to="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        >
                            <img className='' height={90} src={logo} />
                        </Link>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex" style={{opacity: '0.5'}}>
                        <li className="ms-3">
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img  height={40} src={face} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img  height={40} src={insta} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img  height={40} src={wapp} />
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>

        </>
    );
}

export default Footer;