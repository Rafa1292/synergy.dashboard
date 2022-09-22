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
        <div className="col-md-6 filter p-1 flex-wrap">
            <h2 className='col-10 justify-start bold'>
                <strong>
                    Preferencias
                </strong>
            </h2>
            <div className='filter-category p-1'>
                <select className=''>
                    <option>Todas</option>
                    <option>Casas</option>
                    <option>Lotes</option>
                    <option>Apartamentos</option>
                </select>
            </div>
            <div className='filter-places p-1'>
                <input list='places' placeholder='Busqueda por canton, distrito...'
                    className='input ' />
                <datalist id="places">
                    <option>
                        Alajuela, Grecia, San Roque
                    </option>
                    <option>
                        Guanacaste, Liberia, Centro
                    </option>
                </datalist>
            </div>
            <div className=" d-flex justify-end py-1 filter-settings">
                <div onClick={() => OpenFilter()} style={openFilterClass === '' ? {} : filterBtn} className="filter-settings_btn center items-center">
                    <img height={25} src={settingsImg} />
                </div>
            </div>
            <div className={`filter-expanse flex-wrap col-10 ${openFilterClass}`}>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Precio minimo</label>
                    <select className='col-10 my-1'>
                        <option>Cualquiera</option>
                        <option>$1000</option>
                        <option>$2000</option>
                        <option>$3000</option>
                    </select>
                </div>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Precio maximo</label>
                    <select className='col-10 my-1'>
                        <option>Cualquiera</option>
                        <option>$1000</option>
                        <option>$2000</option>
                        <option>$3000</option>
                    </select>
                </div>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Proyecto</label>
                    <select className='col-10 my-1'>
                        <option>Cualquiera</option>
                        <option>Montezuma</option>
                        <option>Palma Real</option>
                        <option>Las calas</option>
                    </select>
                </div>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Mts² minimos</label>
                    <input placeholder='Cualquiera'
                        className='input my-1' />
                </div>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Mts² maximos</label>
                    <input placeholder='Cualquiera'
                        className='input my-1' />
                </div>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Cuartos</label>
                    <input placeholder='Cualquiera'
                        className='input my-1' />
                </div>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Baños</label>
                    <input placeholder='Cualquiera'
                        className='input my-1' />
                </div>
                <div className="col-md-5 d-flex p-1">
                    <label className='label'>Espacios en garage</label>
                    <input placeholder='Cualquiera'
                        className='input my-1' />
                </div>
            </div>
        </div>
    </>
);
}

export default Filter;                   