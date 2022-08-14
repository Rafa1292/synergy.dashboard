import React from 'react'
import face from '@icons/face.png'
import tiktok from '@icons/tiktok.png'
import insta from '@icons/instagram.png'
import wapp from '@icons/wapp.png'
import gmail from '@icons/gmail.png'
import '@styles/Footer.scss';

const Footer = () => {
    return (
        <>
            <div className="col-10 flex-wrap items-center center footer" >
                <div className="col-md-5 flex-wrap ">
                    <div className="col-10 flex-wrap start">
                        <span className='footer-title py-1 col-md-10'>Siguenos</span>
                        <div className="footer-follow col-10 flex-wrap py-2">
                            <img className='mx-2' src={face} />
                            <img className='mx-2' src={tiktok} />
                            <img className='mx-2' src={insta} />
                        </div>
                    </div>
                    <div className="col-10 start flex-wrap">
                        <span className='footer-title py-1 col-md-10'>Contacto</span>
                        <div className="footer-contact col-10 flex-wrap py-2">
                            <img className='mx-2' src={wapp} />
                            <img className='mx-2' src={gmail} />
                        </div>
                    </div>
                    <div className="col-10 start flex-wrap">
                        <span className='footer-title py-1 col-md-10'>Privacidad</span>
                        <div className="footer-privacity col-10 flex-wrap py-2">
                            <span className='col-10 flex-wrap start my-2 link'>
                                Terminos y condiciones
                            </span>
                            <span className='col-10 flex-wrap start my-2 link'>
                                Politica de privacidad
                            </span>
                            <span className='col-10 flex-wrap start my-2 link'>
                                Agentes
                            </span>
                            <span className='col-10 flex-wrap start my-2 link'>
                                Nuestra historia
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 center flex-wrap">
                    <h2 className='col-10 center'>¿Tienes una propiedad y la quieres vender?</h2>
                    <span className='link'>
                        <span className='bold col-8 contact-btn'>
                        HABLEMOS...
                        </span>
                    </span>

                </div>
            </div>
        </>
    );
}

export default Footer;