import React from 'react';

const ReservationDomicile = (props) => {
    return (

        <div className="py-3 mx-1">
            <h1 className="font-link text-center my-3">Pour réserver un moment de détente à domicile</h1>
            <div className=" card-deck mt-3 mx-1">
                <div className="col-12 col-sm-12 col-xl-6 mb-3 mb-sm-0 mx-auto mb-xl-0  card">
                    <div className="card-header text-center font-link fs-2"><i className="fa-solid fa-house px-3"></i>A
                        domicile<i className="fa-solid fa-house px-3"></i></div>
                    <div className="card-body font-link justify-content">
                        <a href="tel:0665366392" className="btn btn-primaire fs-3 color-3 col-12"><i
                            className="fa-solid fa-phone mx-2"></i> Appelez le 0665366392</a>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ReservationDomicile;