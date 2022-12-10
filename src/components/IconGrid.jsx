import React from 'react';
import '@styles/IconGrid.scss';
import bed from '@icons/bed.png';
import shower from '@icons/shower.png';
import warehouse from '@icons/warehouse.png';
import front from '@icons/front.png';
import back from '@icons/back.png';
import totalArea from '@icons/totalArea.png';
import construction from '@icons/construction.png';

const IconGrid = () => {
    return (
        <div className="container px-4 py-5" id="icon-grid">
            <div className="row row-cols-1 fs-6 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
                <div className="col d-flex align-items-center justify-content-center  p-3 ">
                    <img height={25} style={{ opacity: '0.5' }} src={bed} className="bi text-muted flex-shrink-0 me-3" />
                    <div className='icon-description'>
                        <h3 className="fw-bold mb-0 fs-4">Habitaciones</h3>
                        <p className='m-0'>2</p>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center  p-3 ">
                    <img height={25} style={{ opacity: '0.5' }} src={shower} className="bi text-muted flex-shrink-0 me-3" />
                    <div className='icon-description'>
                        <h3 className="fw-bold mb-0 fs-4">Baños</h3>
                        <p className='m-0'>2.5</p>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center  p-3 ">
                    <img height={25} style={{ opacity: '0.5' }} src={warehouse} className="bi text-muted flex-shrink-0 me-3" />
                    <div className='icon-description'>
                        <h3 className="fw-bold mb-0 fs-4">Parqueo</h3>
                        <p className='m-0'>1</p>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center  p-3 ">
                    <img height={25} style={{ opacity: '0.5' }} src={totalArea} className="bi text-muted flex-shrink-0 me-3" />
                    <div className='icon-description'>
                        <h3 className="fw-bold mb-0 fs-4">Area total</h3>
                        <p className='m-0'>300
                            <span style={{ fontSize: '10px' }}>
                                mts²
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center  p-3">
                    <img height={25} style={{ opacity: '0.5' }} src={front} className="bi text-muted flex-shrink-0 me-3" />
                    <div className='icon-description'>
                        <h3 className="fw-bold mb-0 fs-4">Frente</h3>
                        <p className='m-0'>20
                            <span style={{ fontSize: '10px' }}>
                                mts²
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center  p-3">
                    <img height={25} style={{ opacity: '0.5' }} src={back} className="bi text-muted flex-shrink-0 me-3" />
                    <div className='icon-description'>
                        <h3 className="fw-bold mb-0 fs-4">Fondo</h3>
                        <p className='m-0'>15
                            <span style={{ fontSize: '10px' }}>
                                mts²
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center  p-3 ">
                    <img height={25} style={{ opacity: '0.5' }} src={construction} className="bi text-muted flex-shrink-0 me-3" />
                    <div className='icon-description'>
                        <h3 className="fw-bold mb-0 fs-4">Area de construccion</h3>
                        <p className='m-0'>150
                            <span style={{ fontSize: '10px' }}>
                                mts²
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default IconGrid;