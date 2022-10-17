import React, { useState } from "react";
import Navigation from "./Navigation";
import SiteImg from '../assets/Automobile-Site-Image.png';
import HamburgerNav from "./HamburgerNav";

//the navigation bar and the hamburger navigation bar in case the user is using a mobilephone
export default function Header(props) {
    let image = <img src={SiteImg} alt="Site Image" id="siteImg" />
    let [ hamNav, setHamNav ] = useState(undefined);

    return (
        <>
            {hamNav ? <HamburgerNav setHamNav={setHamNav}/> : ""}
        <header>
            <Navigation
                links={[
                    { route: "/", text: image },
                    { route: "/latest-news", text: "Latest Car News" },
                    { route: "/car-info", text: "Car Information" },
                    { route: "/car-comparison", text: "Car Comparison" },

                ]}
                image={image}
            />
            <div className="hamburger fa fa-bars" onClick={() => setHamNav("active")}>
            </div>
        </header>
        </>
    );
}