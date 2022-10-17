import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import upsidedownCar from "../assets/upsidedowncar.jpg"
import CarInfoList from "./CarInfoList";
import carsImages from "../assets/images";
import CarsInfoObj from "../obj/carsInfoObj";
import "../styles/car-info.css"

const [, , , , , , , toyotaCorollaImg, toyotaPriusImg, hyundaiIoniqImg, hondaInsightImg, corvettec8Img, teslaSPlaidImg, ferrari488Img, nissanGtrImg] = carsImages;
//cars objects
const toyotaCorollaObj = new CarsInfoObj("Toyota Corolla", "2018 - present", toyotaCorollaImg, "Compact", "Sedan/Hatchback/Station wagon", "138,990₪ - 168,276₪", 138990, "Continuously Variable Transmission", "Petrol/Hybrid", "1.8L Inline 4", false, "Front Wheel Drive", "4", "125", "14.5 kg-m", "180 kph", "11 sec", "4.4-8.8 Liters per 100 km", "5/5", "7", false, false, "6", true, "/car-info/toyota-corolla")
const toyotaPriusObj = new CarsInfoObj("Toyota Prius", "2015 - present", toyotaPriusImg, "Compact", "Hatchback", "122,500₪ - 166,200₪", 122500, "Continuously Variable Transmission", "Hybrid", "1.8L Inline 4", false, "Front Wheel Drive", "4", "122", "16.6 kg-m", "162 kph", "11.1 sec", "4.5 Liters per 100 km", "5/5", "7", false, true, "6", true, "/car-info/toyota-prius")
const hyundaiIoniqObj = new CarsInfoObj("Hyundai Ioniq", "2017 - 2022", hyundaiIoniqImg, "Compact", "Hatchback", "84,000₪ - 160,000₪", 84000, "Automatic", "Hybrid", "1.6L Inline 4", false, "Front Wheel Drive", "4", "141", "27 kg-m", "185 kph", "11.1 sec", "4.4 Liters per 100 km", "5/5", "7", false, false, "6", false, "/car-info/hyundai-ioniq")
const hondaInsightObj = new CarsInfoObj("Honda Insight", "2019 - 2022", hondaInsightImg, "Compact", "Sedan", "95,000₪ - 209,900₪", 95000, "Automatic", "Hybrid", "1.5L Inline 4", false, "Front Wheel Drive", "4", "151", "27 kg-m", "200 kph", "8.1 sec", "4.5 Liters per 100 km", "5/5", "6", true, true, "8-10", true, "/car-info/honda-insight")
const corvetteC8Obj = new CarsInfoObj("Chevrolete Corvette C8", "2022 - present", corvettec8Img, "Sport", "Coupe Targa", "800,000₪", 800000, "Automatic", "Petrol", "6.2L V-8", true, "Rear Wheel Drive", "8", "495", "64 kg-m", "312 kph", "2.9 sec", "12 Liters per 100 km", "5/5", "6", true, true, "10", false, "/car-info/chevrolet-corvette-c8")
const teslaSPlaidObj = new CarsInfoObj("Tesla S Plaid", "2021 - present", teslaSPlaidImg, "Mid-Size Luxury", "Sedan", "825,418₪ - 962,627₪", 825418, "Single-Speed", "Electric", "3 Electric Motors", false, "All Wheel Drive", "None", "1020", "145", "347 kph", "2.1 sec", "17.5 kilowatt-hour per 100 km", "5/5", "6", true, true, "22", true, "/car-info/tesla-s-plaid")
const ferrari488Obj = new CarsInfoObj("Ferrari 488 GTB", "2015 - 2020", ferrari488Img, "Sport", "Coupe", "2,300,000₪", 2300000, "Robotic", "Turbo Petrol", "3.9L V-8", true, "Rear Wheel Drive", "8", "720", "78.5 kg-m", "340 kph", "2.8 sec", "15 Liters per 100 km", "5/5", "4", true, false, "12", false, "/car-info/ferrari-488-gtb")
const nissanGtrObj = new CarsInfoObj("Nissan GT-R", "2017 - 2022", nissanGtrImg, "Sport", "Coupe", "441,100₪ - 880,000₪", 441100, "Robotic", "Turbo Petrol", "3.8L V-6", true, "All Wheel Drive", "6", "570", "65 kg-m", "315 kph", "2.7 sec", "13 Liters per 100 km", "5/5", "6", true, true, "11", false, "/car-info/nissan-gtr")
const carsInfoArr = [toyotaCorollaObj, toyotaPriusObj, hyundaiIoniqObj, hondaInsightObj, corvetteC8Obj, teslaSPlaidObj, ferrari488Obj, nissanGtrObj]
let carsInfoLinks = [];
for (let i = 0; i < carsInfoArr.length; i++) {
    carsInfoLinks.push(carsInfoArr[i].carLink)
}


const CarInfo = (props) => {
    const { carname } = useParams()
    let navigate = useNavigate()
    let filteredCarList = [];
    let [currentCarInfo, setCurrentCarInfo] = useState();
    let [filterByPrice, setFilterByPrice] = useState();
    let [filterByTurbo, setFilterByTurbo] = useState();
    //when the user click any of the cars it will check which exactly car was clicked by the user and update the state
    let handleState = (link) => {
        navigate(link);
        for (let i = 0; i < carsInfoLinks.length; i++) {
            if (carsInfoLinks[i] == link) {
                return setCurrentCarInfo(carsInfoArr[i]);
            }
        }
    }

    //checking if the user prefer to filter the cars
    if (!filterByPrice && !filterByTurbo) {
        for (let i = 0; i < carsInfoArr.length; i++) {
            filteredCarList.push(carsInfoArr[i])
        }
    }
    else if (filterByPrice && filterByTurbo) {
        filteredCarList = [];
        for (let i = 0; i < carsInfoArr.length; i++) {
            if (filterByPrice >= carsInfoArr[i].minPrice && filterByTurbo == carsInfoArr[i].hasTurbo)
                filteredCarList.push(carsInfoArr[i])
        }
    }
    else if (filterByPrice) {
        filteredCarList = [];
        for (let i = 0; i < carsInfoArr.length; i++) {
            if (filterByPrice >= carsInfoArr[i].minPrice)
                filteredCarList.push(carsInfoArr[i])
        }
    }
    else {
        filteredCarList = [];
        for (let i = 0; i < carsInfoArr.length; i++) {
            if (filterByTurbo == carsInfoArr[i].hasTurbo) {
                filteredCarList.push(carsInfoArr[i])
            }

        }
    }
    
    //checking if the user did navigate to a specifc car, if not it will show the car list
    if (!carname) {
        return (
            <>
                <div className="car-info-image"></div>
                <h1 className="car-info-title mt-5">Car Collection</h1>
                <div className="container mb-4">
                    <div className="row">
                        <label className="car-info-filter col-12">Filter by minimum price
                            <input type="range" min={84000} max={2300000} onChange={(e) => setFilterByPrice(e.target.value)} />
                            {filterByPrice ? ` ${filterByPrice}₪` : ""}
                            <button className="car-info-filter-price" onClick={() => setFilterByPrice(undefined)}>RESET</button>
                        </label>
                        <label className="car-info-filter col-12">Show only turbo cars
                            <input type="checkbox" checked={filterByTurbo} onChange={() => setFilterByTurbo(!filterByTurbo)} />
                        </label>
                    </div>
                </div>
                <CarInfoList filteredCarList={filteredCarList} handleState={handleState} />
            </>
        )
    }
    else if (carname && !currentCarInfo) {
        for (let i = 0; i < carsInfoLinks.length; i++) {
            if (carsInfoLinks[i].slice(10) == carname) {
                setCurrentCarInfo(carsInfoArr[i])
                break;
            }
        }
        //in case the user enters an invalid link
        return (
            <div style={{ textAlign: "center" }}>
                <h1 className="pt-5 pb-2">CARINFO there is no car named <b style={{ color: "#2B74FD" }}>{carname}</b> in this website</h1>
                <img src={upsidedownCar} alt="upside down car" />
            </div>
        )
    }
    return (
        <>
        {/* if the user navigated or clicked any of the cars above it will render a new image and table with the selected car */}
            <img src={currentCarInfo.img} alt={currentCarInfo.carModel + " image"} style={{ width: "100%" }} className="car-info-current-image" />
            <table className="container car-info-table">
                <tbody>
                    <tr className="row">
                        <td className="col-12" style={{ fontWeight: "bold" }}>
                            Overall
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Car Model
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.carModel}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Car Production Years
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.carYears}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Category
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.category}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Type
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.type}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Price
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.price}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Transmission
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.transmission}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Engine Type
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.engineType}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Engine
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.engine}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Turbo
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.hasTurbo == undefined ? "" : currentCarInfo.hasTurbo ? "Yes" : "No"}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Powertrain
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.Powertrain}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Cylinders Number
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.cylinders}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Horse Power
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.horsePower}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Max Torque
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.Torque}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Top Speed
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.topSpeed}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Acceleration 0-100 km/h
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.acceleration}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Average Fuel Consumption
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.fuelAvg}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Safety Grade
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.safetyGrade}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Number of Airbags
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.airbagNum}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Leather Seats
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.hasLeather == undefined ? "" : currentCarInfo.hasLeather ? "Yes" : "No"}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Heated Seats
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.hasHeatedSeats == undefined ? "" : currentCarInfo.hasHeatedSeats ? "Yes" : "No"}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Number of Speakers
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.speakerNum}</td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">
                            Sunroof
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="col-12">{currentCarInfo.hasSunRoof == undefined ? "" : currentCarInfo.hasSunRoof ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CarInfo;
