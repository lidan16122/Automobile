import React from "react";
import { useParams } from "react-router-dom";
import "../styles/car-news.css"
import upsidedownCar from "../assets/upsidedowncar.jpg"
import CarNewsList from "./CarNewsList";
import LastChevyCamaro from './LastChevyCamaro';
import LowerGasPrice from './LowerGasPrice';
import CarsNotComingIsr from './CarsNotComingIsr';
import TeslaModelY2022 from './TeslaModelY2022';
import BentlyContiGTS22 from './BentlyContiGTS22';
import AudiRS322 from './AudiRS322';
import KiaEV9 from './KiaEV9';
import carsImages from "../assets/images";

const [gasPricesImg, chevyCamaroImg, teslaModelYImg, carsDelayImg, bentlyContiImg, audiRS3Img, kiaev9Img] = carsImages



//checking if the user navigated to a car article, if the URL is invalid a error will pop up. if the user didn't navigate it will show the car article list.
const CarNews = () => {
    const { carname } = useParams()
    if (!carname) {
        return (
            <CarNewsList carsImages={[gasPricesImg, chevyCamaroImg, teslaModelYImg, carsDelayImg, bentlyContiImg, audiRS3Img, kiaev9Img]}/>
        )
    }
    else if(carname == "lowering-gas-prices"){
        return(
            <LowerGasPrice gasPricesImg={gasPricesImg}/>
        )
    }
    else if(carname == "last-chevy-camaro"){
        return(
            <LastChevyCamaro chevyCamaroImg={chevyCamaroImg}/>
        )
    }
    else if(carname == "tesla-model-y-2022"){
        return(
            <TeslaModelY2022 teslaModelYImg={teslaModelYImg} />
        )
    }
    else if(carname == "cars-not-coming-israel"){
        return(
            <CarsNotComingIsr carsDelayImg={carsDelayImg} />
        )
    }
    else if(carname == "bently-continental-gts-2022"){
        return(
            <BentlyContiGTS22 bentlyContiImg={bentlyContiImg} />
        )
    }
    else if(carname == "audi-rs3-2022"){
        return(
            <AudiRS322 audiRS3Img={audiRS3Img} />
        )
    }
    else if(carname == "kia-ev9"){
        return(
            <KiaEV9 kiaev9Img={kiaev9Img}/>
        )
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1 className="pt-5 pb-2">CARNEWS there is no car named <b style={{color: "#2B74FD"}}>{carname}</b> in this website</h1>
            <img src={upsidedownCar} alt="upside down car" />
        </div>
    );
}
 
export default CarNews;