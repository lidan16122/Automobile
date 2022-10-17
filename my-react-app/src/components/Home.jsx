import React from "react";
import "../styles/home.css"
import { useNavigate } from "react-router-dom";
import HotTopics from "./HotTopics";
import FuelEfficient from "./FuelEfficient";
import FastestCars from "./FastestCars";
import carsImages from "../assets/images";
import CarsHomepageObj from "../obj/carsHomepageObj";

const [, , , carsDelayImg, bentlyContiImg, audiRS3Img, kiaev9Img, toyotaCorollaImg, toyotaPriusImg, hyundaiIoniqImg, hondaInsightImg, corvettec8Img, teslaSPlaidImg, ferrari488Img, nissanGtrImg] = carsImages
const hotTopicsImgs = [carsDelayImg, bentlyContiImg, audiRS3Img, kiaev9Img]
//cars objects
const corvetteC8 = new CarsHomepageObj("/car-info/chevrolet-corvette-c8", corvettec8Img, "Chevrolet Corvette z06 6.2L V8 670hp", "2023", "800,000₪", "0-100km/h in 2.8 seconds");
const teslaSPlaid = new CarsHomepageObj("/car-info/tesla-s-plaid", teslaSPlaidImg, "Tesla Model S Plaid Electric 1020hp", "2023", "753,063₪", "0-100km/h in 2.1 seconds")
const ferrari488 = new CarsHomepageObj("/car-info/ferrari-488-gtb", ferrari488Img, "Ferrari 488 GTB 3.9L V8 Turbo 720hp", "2020", "2,300,000₪", "0-100km/h in 2.8 seconds")
const nissanGtr = new CarsHomepageObj("/car-info/nissan-gtr", nissanGtrImg, "Nissan GT-R 3.8L V6 Twin Turbo 570hp", "2022", "880,000₪", "0-100km/h in 2.7 seconds")

const toyotaCorolla = new CarsHomepageObj("/car-info/toyota-corolla", toyotaCorollaImg, "Toyota Corolla 1.8L Hybrid 121 hp", "2022", "148,990₪", undefined, "4.5 liters per 100 km")
const hyundaiIoniq = new CarsHomepageObj("/car-info/hyundai-ioniq", hyundaiIoniqImg, "Hyundai Ioniq 1.6L Hybrid 141 hp", "2022", "130,950₪", undefined, "4.3 liters per 100 km")
const hondaInsight = new CarsHomepageObj("/car-info/honda-insight", hondaInsightImg, "Honda Insight 1.5L Hybrid 151 hp", "2022", "161,000₪", undefined, "4.3 liters per 100 km")
const toyotaPrius = new CarsHomepageObj("/car-info/toyota-prius", toyotaPriusImg, "Toyota Prius 1.8L Hybrid 96 hp", "2022", "128,000₪", undefined, "4.4 liters per 100 km")



const Home = () => {
    let navigate = useNavigate()
    return (
        <>
            <div className="container-fluid mb-4">
                <div className="row banner-title">
                    <div className="gas col-sm-12 col-lg-3 banner" onClick={() => navigate("/latest-news/lowering-gas-prices")}>
                        <h2>Israel Lowers Gas Prices</h2>
                    </div>
                    <div className="chevy col-sm-12 col-lg-3 banner" onClick={() => navigate("/latest-news/last-chevy-camaro")}>
                        <h2>Last Chevrolet Camaro</h2>
                    </div>
                    <div className="tesla col-sm-12 col-lg-6 banner" onClick={() => navigate("/latest-news/tesla-model-y-2022")}>
                        <h2 style={{ marginRight: "1em", marginLeft: "1em" }}>The New Tesla Model Y 2022</h2>
                    </div>
                </div>
            </div>
            <main className="container pt-5" >
                {/* passing an array with the car objects for map function */}
                <HotTopics navigate={navigate} hotTopicsImgs={hotTopicsImgs} />
                <FuelEfficient fuelEfficientCars=
                    {[
                        toyotaCorolla,
                        hyundaiIoniq,
                        hondaInsight,
                        toyotaPrius,
                    ]}
                    navigate={navigate} />
                <FastestCars fastestCars=
                    {[
                        corvetteC8,
                        teslaSPlaid,
                        ferrari488,
                        nissanGtr
                    ]}
                    navigate={navigate} />
            </main>
        </>
    );
}

export default Home;