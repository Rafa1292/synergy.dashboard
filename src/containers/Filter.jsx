import React, { useState } from 'react';
import preferences from '@icons/preferences.png';
import preferencesClose from '@icons/preferencesClose.png';
import '@styles/Filter.scss';

const Filter = () => {
    const [openFilterClass, setOpenFilterClass] = useState('');
    const [settingsImg, setSettingsImg] = useState(preferences);
    const filterBtn = {
        background: 'rgba(0,0,0,.7)'
    }

    const OpenFilter = () => {
        if (openFilterClass.includes('filter-expanse_opened')) {
            setOpenFilterClass('');
            setSettingsImg(preferences);
        }
        else {
            setOpenFilterClass('filter-expanse_opened');
            setSettingsImg(preferencesClose);
        }
    }
    return (
        <>
            <div className="col-12 justify-content-center mt-3 d-flex py-4 flex-wrap">
                <div className="col-xl-6 d-flex justify-content-center flex-wrap">
                    <h2 className='col-6 justify-start bold'>
                        <strong>
                            Preferencias
                        </strong>
                    </h2>
                    <div className="col-md-8 col-10 justify-start d-flex">
                        <select defaultValue={1} className="fs-6 text-muted form-select form-select-sm" aria-label=".form-select-sm">
                            <option value="1">Todas</option>
                            <option value="2">Casas</option>
                            <option value="3">Lotes</option>
                            <option value="4">Apartamentos</option>
                        </select>
                    </div>
                    <div className="col-7 py-2 d-flex">
                        <input
                            className="form-control fs-6"
                            list="datalistOptions"
                            id="searchs"
                            placeholder="Busqueda por canton, distrito..."
                        />
                        <datalist id="datalistOptions">
                            <option value="Alajuela, Grecia, San Roque"></option>
                            <option value="Guanacaste, Liberia, Centro"></option>
                            <option value="Alajuela, Grecia, Los Angeles"></option>
                        </datalist>

                    </div>

                    <div className=" d-flex col-md-1 col-3 py-2 justify-content-end">
                        <div onClick={() => OpenFilter()} style={openFilterClass === '' ? {} : filterBtn} className="filter-settings_btn ">
                            <img height={25} src={settingsImg} />
                        </div>
                    </div>

                    <div className={`filter-expanse justify-content-center d-flex flex-wrap col-12 ${openFilterClass}`}>

                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Precio minimo</label>
                            <select defaultValue={1} className="fs-6 text-muted form-select form-select-sm" aria-label=".form-select-sm ">
                                <option>Cualquiera</option>
                                <option>$1000</option>
                                <option>$2000</option>
                                <option>$3000</option>
                            </select>
                        </div>
                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Precio maximo</label>
                            <select defaultValue={1} className="fs-6 text-muted form-select form-select-sm" aria-label=".form-select-sm ">
                                <option>Cualquiera</option>
                                <option>$1000</option>
                                <option>$2000</option>
                                <option>$3000</option>
                            </select>
                        </div>
                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Proyecto</label>
                            <select defaultValue={1} className="fs-6 text-muted form-select form-select-sm" aria-label=".form-select-sm ">
                                <option>Cualquiera</option>
                                <option>Montezuma</option>
                                <option>Palma Real</option>
                                <option>Las calas</option>
                            </select>
                        </div>
                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Mts² minimos</label>
                            <input placeholder='Cualquiera'
                                className='form-control my-1 fs-6' />
                        </div>
                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Mts² maximos</label>
                            <input placeholder='Cualquiera'
                                className='form-control my-1 fs-6' />
                        </div>
                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Cuartos</label>
                            <input placeholder='Cualquiera'
                                className='form-control my-1 fs-6' />
                        </div>
                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Baños</label>
                            <input placeholder='Cualquiera'
                                className='form-control my-1 fs-6' />
                        </div>
                        <div className="col-md-8 col-10 flex-wrap d-flex p-1">
                            <label className='label'>Espacios en garage</label>
                            <input placeholder='Cualquiera'
                                className='form-control my-1 fs-6' />
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="button" className="col-md-8 col-10  btn btn-dark">Buscar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;                   