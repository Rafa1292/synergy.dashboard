import React from 'react';
import '@styles/Navbar.scss';

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
                        <span className='bold contact-btn'>
                        HABLEMOS...
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Navbar;