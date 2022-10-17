import React from "react";
import { useNavigate } from "react-router-dom";

//the card list of all the car articles on the website.
const CarNewsList = ({carsImages}) => {
    const [gasPricesImg, chevyCamaroImg, teslaModelYImg, carsDelayImg, bentlyContiImg, audiRS3Img, kiaev9Img] = carsImages;
    let navigate = useNavigate();
    return ( 
        <>
            <div className="car-list-img" style={{backgroundColor: "white"}}></div>
            <h1 className="car-news-title mt-5 mb-5">Latest Car News</h1>
            <div className="container">
                <div className="row car-news-card">
                    <img src={teslaModelYImg} alt="The New Tesla Model Y Image" className="col-md-12 col-lg-4 car-news-card-img img-trans" onClick={() => navigate("/latest-news/tesla-model-y-2022")}/>
                    <div className="col-md-12 col-lg-8 car-news-card-text">
                        <h3 className="pb-2" onClick={() => navigate("/latest-news/tesla-model-y-2022")}>The New Tesla Model Y</h3>
                        <p className="pb-5">Say hello to the Tesla Model Y, which is essentially a bigger, more spacious Model 3 and should appeal to buyers looking for extra SUV practicality over the compromises that come with a hatchback-sized family car and it is fully electric with a good battery life. The new Tesla Model Y is essentially a raised SUV version of the Model 3. It comes with the same blend of a great range, quirky software and Tesla’s brilliant global charging network.</p>
                        <span className="car-news-card-credits"><b>carwow </b>| 30 August 2022</span>
                    </div>
                </div>
                <div className="row car-news-card">
                    <img src={chevyCamaroImg} alt="Chevrolet Camaro 2023 Image" className="col-md-12 col-lg-4 car-news-card-img img-trans"  onClick={() => navigate("/latest-news/last-chevy-camaro")}/>
                    <div className="col-md-12 col-lg-8 car-news-card-text">
                        <h3 className="pb-2"  onClick={() => navigate("/latest-news/last-chevy-camaro")}>The Last Chevrolet Camaro?</h3>
                        <p className="pb-5">The Chevy Camaro first came out in 1967 and was an instant hit among performance car enthusiasts. It offered several engine options, but the most popular was the 375-horsepower V8. Over the years, the Camaro has undergone many changes but has remained one of the most popular sports cars. This is why it might come as a shock, but recently Chevy announced that the beloved Camaro will be discontinued. 2024 is set to be the last production year for the Camaro. And Chevy has announced that it will have an exclusive Farewell Package available exclusively on the 2024 Camaro.</p>
                        <span className="car-news-card-credits"><b>Valley Chevy </b>| 8 September 2022</span>
                    </div>
                </div>
                <div className="row car-news-card">
                    <img src={gasPricesImg} alt="Chevrolet Camaro 2023 Image" className="col-md-12 col-lg-4 car-news-card-img img-trans"  onClick={() => navigate("/latest-news/lowering-gas-prices")}/>
                    <div className="col-md-12 col-lg-8 car-news-card-text">
                        <h3 className="pb-2"  onClick={() => navigate("/latest-news/lowering-gas-prices")}>Israel Lowers Gas Prices</h3>
                        <p className="pb-5">Israel gas price is about to go down? After the excessive gas price in Israel on  July, you are surprisingly going to pay less for you gas at the start of next month. After the prices went down drastically at August, on September your going to pay 40 cents less than the current price and the price will be 6.18 shekels!</p>
                        <span className="car-news-card-credits"><b>ice website </b>| 23 August 2022</span>
                    </div>
                </div>
                <div className="row car-news-card">
                    <img src={carsDelayImg} alt="cars not coming to israel image" className="col-md-12 col-lg-4 car-news-card-img img-trans"  onClick={() => navigate("/latest-news/cars-not-coming-israel")}/>
                    <div className="col-md-12 col-lg-8 car-news-card-text">
                        <h3 className="pb-2"  onClick={() => navigate("/latest-news/cars-not-coming-israel")}>Cars Are Delayed On The Way To Israel</h3>
                        <p className="pb-5">As planned, Israel was supposed to meet the electric cars of Mazda and Renault, a 7 seater Nissan and the new family car from Peugeot. but it didn't happend.</p>
                        <span className="car-news-card-credits"><b>Noam Ryan </b>| 30 August 2022</span>
                    </div>
                </div>
                <div className="row car-news-card">
                    <img src={bentlyContiImg} alt="Bently Continental GTS 22" className="col-md-12 col-lg-4 car-news-card-img img-trans"  onClick={() => navigate("/latest-news/bently-continental-gts-2022")}/>
                    <div className="col-md-12 col-lg-8 car-news-card-text">
                        <h3 className="pb-2"  onClick={() => navigate("/latest-news/bently-continental-gts-2022")}>Bently Continental GT S Revealed</h3>
                        <p className="pb-5">Bentley unveils a new sporty version of the large coupe Bentley Continental GT, But this time it is not an end version based on the famous W12 engine, not necessarily on the basis of the more modest V8 engine in this way Bentley enables an accessible sporty version, relatively of course, and this is a necessary step since the V8 versions have become particularly sought after since the launch of the model in 2019.</p>
                        <span className="car-news-card-credits"><b>Hezi Goren </b>| 29 August 2022</span>
                    </div>
                </div>
                <div className="row car-news-card">
                    <img src={audiRS3Img} alt="Audi RS3 2022" className="col-md-12 col-lg-4 car-news-card-img img-trans"  onClick={() => navigate("/latest-news/audi-rs3-2022")}/>
                    <div className="col-md-12 col-lg-8 car-news-card-text">
                        <h3 className="pb-2"  onClick={() => navigate("/latest-news/audi-rs3-2022")}>Audi RS3 2022 "The Green Monster"</h3>
                        <p className="pb-5">We took the compact sports car Audi RS3 with 400 hp and a dual drive system to the test. It was hot... This green monster we took to the test may seem a bit familiar and innocent, but don't let her fool you. Already from the vehicle's specifications you can see that this is a very fast driving machine with a powerful drive unit, Adjustable sports suspension, and very wide and sticky sports tires. We took the Audi RS3 on a warm weekend for a hot and fun test.</p>
                        <span className="car-news-card-credits"><b>Kobi Zvili </b>| 22 August 2022</span>
                    </div>
                </div>
                <div className="row car-news-card">
                    <img src={kiaev9Img} alt="Kia EV9" className="col-md-12 col-lg-4 car-news-card-img img-trans"  onClick={() => navigate("/latest-news/audi-rs3-2022")}/>
                    <div className="col-md-12 col-lg-8 car-news-card-text">
                        <h3 className="pb-2"  onClick={() => navigate("/latest-news/kia-ev9")}>Kia EV9 A New Electric SUV by Kia</h3>
                        <p className="pb-5">While here in Israel we have been waiting for a long time for the delayed arrival of the Kia EV6, Kia will soon launch another electric vehicle, the third in number and the second based on the dedicated E-GMP platform for electric vehicles that is also used by Hyundai and Genesis.</p>
                        <span className="car-news-card-credits"><b>Hezi Goren </b>| 29 August 2022</span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CarNewsList;