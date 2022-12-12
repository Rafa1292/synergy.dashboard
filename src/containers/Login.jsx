import React, { useRef, useContext } from 'react';
import { usePost } from '../hooks/useAPI';
import { Link, useHistory } from "react-router-dom"
import AppContext from '../context/AppContext';
import face from '@icons/facew.png';
import googleauth from '@icons/googleauth.png';

const Login = () => {
    const email = useRef('');
    const password = useRef('');
    const history = useHistory();
    const { setRole } = useContext(AppContext);

    const handleLogin = async () => {
        const user = {
            username: email.current.value.toString(),
            password: password.current.value
        };

        const response = await usePost('auth/login', user);
        if (!response.error) {
            localStorage.removeItem('token');
            localStorage.setItem('token', response.content.token);
            await setRole();
            history.push('/');
        }
    }

    const facebook = async () => {
        window.open("https://limitless-hamlet-11683.herokuapp.com/api/v1/auth/facebook", "_self");
    }

    const google = async () => {
        window.open("https://limitless-hamlet-11683.herokuapp.com/api/v1/auth/google", "_self");
    }

    return (
        <div className='col-sm-4 flex-wrap d-flex  justify-content-center'>
            <strong className='col-12 text-center fs-5 my-4'>
                Inicia sesion
            </strong>
            <button onClick={facebook} type='button' className="col-4 m-1 btn flex-wrap center" style={{ padding: '0.5rem', background: '#3b5998', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>
                <img height={20} src={face} className='' />
            </button>
            <button onClick={google} type='button' className="col-4 m-1 flex-wrap btn center" style={{ border: '1px solid lightgray', padding: '0.5rem', background: '#fff', color: 'black', fontWeight: 'bold', borderRadius: '5px' }}>
                <img height={25} src={googleauth} className='' />
            </button>
            <span className='col-12 my-4' style={{ borderBottom: '1px solid rgba(0,0,0,.1)' }}></span>
            <form className='col-8'>
                <div className="form-floating my-2">
                    <input type="email" className="form-control" ref={email} id="floatingInput" placeholder="name@example.com"></input>
                    <label htmlFor="floatingInput">Correo</label>
                </div>

                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingPassword" ref={password} placeholder='Contraseña'></input>
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>
            </form>

            <div className="col-8 d-flex justify-content-center my-1">
                <button onClick={handleLogin} type='button' className='col-12 py-2 btn btn-dark' placeholder='Iniciar sesion'>
                    Iniciar sesion
                </button>
            </div>
            <Link className='col-12 d-flex justify-content-center my-2' to={'/password-recovery'}>
                <small>¿Olvidó su contraseña?</small>
            </Link>
            <small className='text-center my-2'>Al iniciar sesion, estas de acuerdo con nuestros
                <strong>&nbsp;Terminos de servicio</strong> y <strong>Politica de privacidad&nbsp;</strong>
                incuyendo el <strong>Uso de Cookies</strong>. Otros podran contactarte por email
                o numero telefonico que brindaste.
            </small>

            <span className='col-12 my-3' style={{ borderBottom: '1px solid rgba(0,0,0,.1)' }}></span>

            <div className='col-12 d-flex justify-content-center flex-wrap'>
                <span className='col-12 justify-content-center d-flex py-2 ' >¿No estas registrado?</span>
                <Link className='col-8 justify-content-center d-flex py-2' style={{ textDecoration: 'none' }} to={'/register'}>
                    <button type='button' className='col-8 btn btn-secondary'>
                        Registrarse
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;