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
                <div className="col-md-4 flex-wrap ">
                    <div className="col-10 p-2 center flex-wrap">
                        <h2 className='col-10 text-center center'>¿Tienes una propiedad y la quieres vender?</h2>
                        <span className='link'>
                            <a href='https://wa.me/50660468877?text=Me+gustaria+una+asesoria' target='blank' style={{ textDecoration: 'none' }} className='bold col-8 contact-btn'>
                                HABLEMOS...
                            </a>
                        </span>

                    </div>
                    <div className="col-10 flex-wrap start">
                        <div className="footer-follow col-10 flex-wrap py-2">
                            <a href='https://www.facebook.com/quesadabienesraices' target={'blank'}>
                                <img className='mx-2' src={face} />
                            </a>
                            <img className='mx-2' src={tiktok} />
                            <img className='mx-2' src={insta} />
                            <a href='https://wa.me/50660468877?text=Me+gustaria+una+asesoria' style={{ textDecoration: 'none' }} target='blank'>
                                <img className='mx-2' src={wapp} />
                            </a>
                            <a target={'blank'} href="mailto:quesada.realty@gmail.com?Subject=Interesado%20en%20asesoria">
                                <img className='mx-2' src={gmail} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 start flex-wrap">
                    <span className='footer-title  col-md-10'>Privacidad</span>
                    <div className="footer-privacity col-10 flex-wrap py-1">
                        <a href='/terms-and-conditions' className='col-10 flex-wrap start link'>
                            Terminos y condiciones
                        </a>
                        <a href='/privacy-policy' className='col-10 flex-wrap start link'>
                            Politica de privacidad
                        </a>
                        <a href='/agents' className='col-10 flex-wrap start link'>
                            Agentes
                        </a>
                        <a className='col-10 flex-wrap start link'>
                            Nuestra historia
                        </a>
                    </div>
                </div>


                <small className='col-8 left py-1' style={{marginTop: '50px'}}>
                    Alajuela, Grecia, Rincon de arias.
                </small>
                <small className='col-8 left'>
                    © 2011 Quesada Bienes Raices
                </small>
            </div>
        </>
    );
}

export default Footer;