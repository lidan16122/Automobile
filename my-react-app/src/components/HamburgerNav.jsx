import React from "react";
import { useNavigate } from "react-router-dom";

//the hamburger navigation bar it will display when under 480 px
const HamburgerNav = ({setHamNav}) => {
    let navigate = useNavigate();
    const handleClick = (link) => {
        navigate(link);
        setHamNav(undefined);
    }
    return (
        <>
        <ul className="ham-links container-fluid" style={{paddingLeft: "0", paddingRight: "0"}}>
            <li className="col-12" onClick={() => handleClick("/")}>Home</li>
            <li className="col-12" onClick={() => handleClick("/latest-news")}>Latest Car News</li>
            <li className="col-12" onClick={() => handleClick("/car-info")}>Car Information</li>
            <li className="col-12" onClick={() => handleClick("/car-comparison")}>Car Comparison</li>
        </ul>
        <span className="go-back fa fa-arrow-right" onClick={() => setHamNav(undefined)}></span>
        </>
    );
}

export default HamburgerNav;