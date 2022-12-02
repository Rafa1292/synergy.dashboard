import React from 'react';
import grecia from '@logos/teq.jpg';
import '@styles/Agents.scss';

const Agents = () => {
    return (
        <div className='col-10 center' style={{ minHeight: '80vh' }}>
            <img src={grecia} className='agents-picture' />
            <div className='agents-backdrop'></div>
            <h3 className='agents-title'>Nuestros Expertos</h3>
            <div className="col-10 py-2 flex-wrap">
                <div className="agent-card">
                    <div className='agent-info'>
                        <h3>Andrey Quesada</h3>
                        <span>Lic. Administracion</span>
                    </div>
                </div>
                <div className="agent-card">
                    <div className='agent-info'>
                        <h3>Andrey Quesada</h3>
                        <span>Lic. Administracion</span>
                    </div>
                </div>
                <div className="agent-card">
                    <div className='agent-info'>
                        <h3>Andrey Quesada</h3>
                        <span>Lic. Administracion</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agents;