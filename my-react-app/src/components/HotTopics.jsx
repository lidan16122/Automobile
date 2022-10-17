import React from "react";

const HotTopics = ({ navigate, hotTopicsImgs }) => {
    const [carsDelayImg, bentlyContiImg, audiRS3Img, kiaev9Img] = hotTopicsImgs;
//car news cards with the option to navigate to the card article.
    return (
        <section>
            <h1 className="main-title">Hot Topics</h1>
            <hr />

            <div className="card" >
                <div className="row">

                    <img src={carsDelayImg} alt="Cars Delay To Israel" className="col-lg-6 img-trans" onClick={() => navigate("/latest-news/cars-not-coming-israel")} />
                    <div className="card-block col-lg-6" >
                        <h2 className="top-article" onClick={() => navigate("/latest-news/cars-not-coming-israel")}>
                            Cars Are Delayed On The Way <br /> To Israel
                        </h2>
                        <p className="article-para">As planned, we were supposed to meet the electric cars of Mazda and Renault, a 7 seater Nissan and the new family car from Peugeot. but it didn't happend.</p>
                        <span className="card-credits"><b>Noam Ryan </b>| 30 August 2022</span>
                    </div>
                </div>
            </div>

            <div className="container" style={{ paddingTop: "3%" }}>
                <div className="row justify-content-around justify-content-lg-between">
                    <div className="col-md-12 col-lg-3 card small-card" >

                        <img src={bentlyContiImg} alt="Bently Continental GTS 22" className="img-fluid card-img-top img-trans" onClick={() => navigate("/latest-news/bently-continental-gts-2022")} />

                        <div className="card-block">

                            <h3 className="small-card-title" onClick={() => navigate("/latest-news/bently-continental-gts-2022")}>Bently Continental GT S Revealed</h3>

                            <p className="small-para">Bently reveals the sporty version of the Bently Continental GT coupe...</p>
                            <span className="card-credits-small"><b>Hezi Goren </b>| 29 August 2022</span>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3 card small-card" >

                        <img src={audiRS3Img} alt="Audi RS3 2022" className="img-fluid card-img-top img-trans" onClick={() => navigate("/latest-news//latest-news/audi-rs3-2022")} />

                        <div className="card-block">
                            <h3 className="small-card-title" onClick={() => navigate("/latest-news//latest-news/audi-rs3-2022")}>Audi RS3 2022 "The Green Monster"</h3>
                            <p className="small-para">Compact sports car, Audi RS3 with 400 horse power! and it's AWD...</p>
                            <span className="card-credits-small"><b>Kobi Zvili </b>| 22 August 2022</span>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3 card small-card">

                        <img src={kiaev9Img} alt="Kia EV9" className="img-fluid card-img-top img-trans" onClick={() => navigate("/latest-news/kia-ev9")} />

                        <div className="card-block">
                            <h3 className="small-card-title" style={{ marginRight: "16px" }} onClick={() => navigate("/latest-news/kia-ev9")}>Kia EV9 A New Electric SUV by Kia</h3>
                            <p className="small-para">While here in Israel we are still waiting for the EV6, Kia will launch a brand new electric SUV...</p>
                            <span className="card-credits-small"><b>Hezi Goren </b>| 29 August 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HotTopics;
