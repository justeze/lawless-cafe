import React from 'react';

const Card = () => {
    return (
        <div>
            <div className='row'>
                <div className='col col-sm-6 col-md-4'>
                    <div className="card card-history card-today-income">
                        <div className="card-content">
                            <h6 className='title-card-history'>Today’s Income</h6>
                            <h5 className='total-income'>RP.1.000.000</h5>
                            <h6 className='title-card-history'>+2% Yesterday</h6>
                        </div>
                        <div className="buble" style={{ left: '70%', top: '5%' }}></div>
                        <div className="buble" style={{ left: '50%', top: '25%' }}></div>
                        <div className="buble" style={{ left: '60%', top: '15%' }}></div>
                    </div>
                </div>
                <div className='col col-sm-6 col-md-4'>
                    <div className="card card-history card-orders">
                        <div className="card-content">
                            <h6 className='title-card-history'>Orders</h6>
                            <h5 className='total-income'>RP.1.000.000</h5>
                            <h6 className='title-card-history'>+2% Yesterday</h6>
                        </div>
                        <div className="buble" style={{ left: '70%', top: '5%' }}></div>
                        <div className="buble" style={{ left: '50%', top: '25%' }}></div>
                        <div className="buble" style={{ left: '60%', top: '15%' }}></div>
                    </div>
                </div>
                <div className='col col-sm-6 col-md-4'>
                    <div className="card card-history card-this-year-income">
                        <div className="card-content">
                            <h6 className='title-card-history'>This Year’s Income</h6>
                            <h5 className='total-income'>RP.1.000.000</h5>
                            <h6 className='title-card-history'>+2% Yesterday</h6>
                        </div>
                        <div className="buble" style={{ left: '70%', top: '5%' }}></div>
                        <div className="buble" style={{ left: '50%', top: '25%' }}></div>
                        <div className="buble" style={{ left: '60%', top: '15%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card