import React from "react";

const LowerGasPrice = ({ gasPricesImg }) => {
    return (
        <article className="container car-news-article">
            <h1 className="car-news-article-title pb-4">Israel Lowers Gas Prices</h1>
            <b className="car-news-article-desc pb-5">Israel gas price is about to go down? After the excessive gas price in Israel on  July, you are surprisingly going to pay less for you gas at the start of next month. After the prices went down drastically at August, on September your going to pay 40 cents less than the current price and the price will be 6.18 shekels!</b>
            <div className="container pb-4">
                <div className="row">
                    <img src={gasPricesImg} alt="Gas pump image" className="col-md-12 col-lg-6" />
                    <div className="col-md-12 col-lg-6 car-news-article-img-para">
                        <h2>Israel gas price continue to go down</h2>
                        <p>Although, you will still pay more than 6₪ per liter as estimates had hoped last week, but after the Central Bureau of Statistics revealed that inflation bounced up by 5.2%, minister of finance Liberman will extend the reduction on gas tax price until 15 November and therefore also the next month the gas price will go down.</p>
                        <p> What does it mean for the drivers? Due to the current drop in oil prices alongside the dollar exchange rate, The price will drop in September, but as mentioned not below the 6₪ mark. The prices have already dropped significantly at the beginning of August to 6.58₪ in self-service and now they are going to drop according to a report by News 13 by 40 more days.</p>
                    </div>
                </div>
            </div>
            <p>On the energy matter, it is estimated that in the event that the price of a barrel of oil will continue to be only around 100 dollars and even decrease from that, and at the same time the dollar exchange rate in Israel will move around 3.20₪ to 3.30₪, So even in September, a reduction will be felt towards a little more than five shekels per liter, with a shekel less than its current price at the stations.</p>
            <p className="pb-5">Matan Hodorov pointed out that according to the initial calculations that predict the oil prices in the world for the month of September, The expectation now is for a drop of 40 cents per liter of 95 octane, therefore the price per liter will be only 6.18₪ per liter for self-service.</p>
            <p><b>POSTED ON <a href="https://www.ice.co.il/" className="car-news-article-credits">AUGUST 23, 2022</a> BY <a href="https://www.ice.co.il/" className="car-news-article-credits">ICE WEBSITE</a></b></p>
        </article>
    );
}

export default LowerGasPrice;