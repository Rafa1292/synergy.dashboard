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
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img className='mx-2' src={face} />
                            </a>
                            <img className='mx-2' src={tiktok} />
                            <img className='mx-2' src={insta} />
                        </div>
                    </div>
                    <div className="col-10 start flex-wrap">
                        <span className='footer-title py-1 col-md-10'>Contacto</span>
                        <div className="footer-contact col-10 flex-wrap py-2">
                            <a href='https://wa.me/50660468877?text=Me+gustaria+una+asesoria' style={{ textDecoration: 'none' }} target='blank'>
                                <img className='mx-2' src={wapp} />
                            </a>
                            <a target={'blank'} href="mailto:quesada.realty@gmail.com?Subject=Interesado%20en%20asesoria">
                                <img className='mx-2' src={gmail} />
                            </a>
                        </div>
                    </div>
                    <div className="col-10 start flex-wrap">
                        <span className='footer-title py-1 col-md-10'>Privacidad</span>
                        <div className="footer-privacity col-10 flex-wrap py-2">
                            <a href='/terms-and-conditions' className='col-10 flex-wrap start my-2 link'>
                                Terminos y condiciones
                            </a>
                            <a  href='/privacy-policy' className='col-10 flex-wrap start my-2 link'>
                                Politica de privacidad
                            </a>
                            <a className='col-10 flex-wrap start my-2 link'>
                                Agentes
                            </a>
                            <a className='col-10 flex-wrap start my-2 link'>
                                Nuestra historia
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 p-2 center flex-wrap">
                    <h2 className='col-10 text-center center'>¿Tienes una propiedad y la quieres vender?</h2>
                    <span className='link'>
                        <a href='https://wa.me/50660468877?text=Me+gustaria+una+asesoria' target='blank' style={{ textDecoration: 'none' }} className='bold col-8 contact-btn'>
                            HABLEMOS...
                        </a>
                    </span>

                </div>
            </div>
        </>
    );
}

export default Footer;