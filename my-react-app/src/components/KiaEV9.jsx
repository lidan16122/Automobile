import React from "react";

const KiaEV9 = ({ kiaev9Img }) => {
    return (
        <article className="container car-news-article">
            <h1 className="car-news-article-title pb-4">Kia EV9 A New Electric SUV by Kia</h1>
            <b className="car-news-article-desc pb-5">While here in Israel we have been waiting for a long time for the delayed arrival of the Kia EV6, Kia will soon launch another electric vehicle, the third in number and the second based on the dedicated E-GMP platform for electric vehicles that is also used by Hyundai and Genesis.</b>
            <div className="container pb-4">
                <div className="row">
                    <img src={kiaev9Img} alt="Kia EV9" className="col-md-12 col-lg-6" />
                    <div className="col-md-12 col-lg-6 car-news-article-img-para">
                        <h2>Kia EV9 is on its way to the production line</h2>
                        <p>The Kia EV9 was revealed almost a year ago at the Auto Mobility show in Los Angeles as a concept model for a large electric SUV. The exterior design was quite futuristic and bold, but also has very prominent square proportions that leave no doubt about its branding as a recreational vehicle. According to Kia, this is a new design language called Opposites United.</p>
                        <p>In the photos revealed by the manufacturer in which the vehicle was taken during driving tests at Kia's development center in Korea, it is evident that the unique proportions have been preserved, with an upright windshield, square beams, and large side windows.</p>
                    </div>
                </div>
            </div>
            <p>In the front, you can see the lighting units that stand out through the camouflage stickers and are integrated into a surface that simulates a front grill that will probably be completely sealed. It is also possible to notice wheelhouses with prominent and square covers, and significant protrusions in the wings above them. No image of the rear was revealed, but the concept model revealed vertical headlights with an original design and a smooth trunk. The rear doors that open against the direction of travel and the futuristic passenger cabin of the concept model are not expected to make it to the production model.</p>
            <p>At Kia they say that the vehicle has a AWD and it was tested under the conditions of hill climbing, a water slide, and an off-road track. In addition, the vehicle was tested on a high-speed track. The development of the vehicle took 44 months, and the tests at Kia's development center join additional driving tests that the vehicle undergoes in various conditions around the world. When unveiling the concept model, Kia stated that the maximum driving range is expected to be 480 km, and like most Hyundai and Kia electric models, it will support fast charging with a power of up to 350 kilowatts that will allow charging from 10% to 80% of the battery's capacity in 20 minutes.</p>
            <p className="pb-5">Kia EV9 is expected to be revealed in the first quarter of 2023 and it arouses many expectations, especially in view of the praise that Kia EV6 reaps in road tests around the world and the many titles it has won, including European Car of the Year.</p>
            <p><b>POSTED ON <a href="https://www.gear.co.il/%D7%9B%D7%AA%D7%91%D7%AA-%D7%A8%D7%9B%D7%91/2022-08-29-N03-%D7%A7%D7%99%D7%94-EV9" className="car-news-article-credits">AUGUST 29, 2022</a> BY <a href="https://www.gear.co.il/%D7%9B%D7%AA%D7%91%D7%AA-%D7%A8%D7%9B%D7%91/2022-08-29-N03-%D7%A7%D7%99%D7%94-EV9" className="car-news-article-credits">HEZI GOREN</a></b></p>

        </article>
    );
}

export default KiaEV9;