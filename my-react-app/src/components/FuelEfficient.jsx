import React from "react";

//mapping the array with some style.
const FuelEfficient = ({ fuelEfficientCars, navigate }) => {
    return (
        <section>
            <h2 className="main-title">Most Fuel-Efficient Cars</h2>
            <hr />
            <div className="container" >
                <div className="row justify-content-around justify-content-lg-between">

                    {fuelEfficientCars.map((value, index) => {
                        return (
                            <div className="col-sm-12 col-md-2 card smallest-card" key={index}>
                                <img src={value.img} alt={`${value.h4} ${value.year}`} className="card-img-top" onClick={() => navigate(value.link)} />
                                <div className="card-block" style={{ marginTop: "0" }}>
                                    <h4 className="small-card-title" onClick={() => navigate(value.link)}>{value.desc}</h4>
                                    <p>{value.fuel}</p>
                                    <span className="smallest-card-price"><b>{value.year} |</b>{value.price}</span>
                                    <hr />
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>
    );
}

export default FuelEfficient;
