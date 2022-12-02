import React from 'react';
import '@styles/Navbar.scss';
import face from '@icons/facew.png'
import insta from '@icons/instagramw.png'
import wapp from '@icons/wappw.png'

const Navbar = ({ menuState }) => {


    return (
        <>
            <main className={`navbar ${menuState}`}>
                <ul className="list-group navbar-options list-group-flush col-12">
                    <li className="list-group-item">Casas</li>
                    <li className="list-group-item">Lotes</li>
                    <li className="list-group-item">Comercial</li>
                    <li className="list-group-item">Alquiler</li>
                </ul>
                <ul className="list-group list-group-horizontal col-12 list-group-flush justify-content-center" style={{opacity: '0.8'}}>
                        <li className="list-group-item">
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img  height={40} src={face} />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img  height={40} src={insta} />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img  height={40} src={wapp} />
                            </a>
                        </li>
                    </ul>
            </main>
        </>
    );
}

export default Navbar;