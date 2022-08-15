import React from 'react';
import '@styles/Navbar.scss';
import face from '@icons/face.png'
import tiktok from '@icons/tiktok.png'
import insta from '@icons/instagram.png'

const Navbar = () => {
    return (
        <>
            <div className="col-10  nav d-flex items-end">
                <div className="col-md-10 nav-content">
                    <span className='p-2 link'>CASAS</span>
                    <span className='p-2 link'>LOTES</span>
                    <span className='p-2 link'>COMERCIAL</span>
                    <span className='p-2 link'>ALQUILER</span>
                    <span className='link '>
                        <a href='https://wa.me/50660468877?text=Me+gustaria+una+asesoria' target='blank' style={{textDecoration: 'none'}} className='bold contact-btn'>
                            HABLEMOS...
                        </a>
                    </span>
                </div>

                <div className="col-10 display-on-mobile relative py-2" style={{ position: 'absolute', bottom: '0' }}>
                    <div className="col-10 p-2 d-flex items-center flex-wrap">
                        <div className="col-5 d-flex center">
                            Siguenos
                        </div>
                        <img height={40} className='mx-1' src={face} />
                        <img height={40} className='mx-1' src={tiktok} />
                        <img height={40} className='mx-1' src={insta} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;