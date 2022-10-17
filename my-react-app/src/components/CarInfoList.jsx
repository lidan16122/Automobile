import React from "react";

//mapping the carinfo array. the list of all cars info cards on this website.
const CarInfoList = ({ filteredCarList, handleState }) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-around justify-content-lg-between">
                    {filteredCarList.map((value, index) => {
                        return (
                            <div className="card car-info-card" key={index} >
                                <img src={value.img} alt={value.carModel + " image"} onClick={() => handleState(value.carLink)} style={{cursor: "pointer"}}/>
                                <div className="card-block">
                                    <h2 onClick={() => handleState(value.carLink)} className="car-info-card-title">{value.carModel}</h2>
                                    <b>{value.carYears}</b>
                                    <p>{value.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default CarInfoList;