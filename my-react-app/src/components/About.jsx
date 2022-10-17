import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/about.css"
import aboutUsImg from "../assets/About-image.jpg"
//about us page.
const About = () => {
    let navigate = useNavigate();
    return ( 
        <>
            <img src={aboutUsImg} alt="about us image" style={{width: "100%", height: "50vh"}}/>
            <div className="container aboutus">
                <p><strong>Welcome To Automoblie Car Website</strong></p>
                <p>The website is developed by a car enthusiast, with a lot of effort and thinking, time consuming researches to give the best and most accurate information about cars.</p>
                <p>On this website you can find:</p>
                <p><strong>Latest car news:</strong></p>
                <p>The latest and hottest car news around the world and israel, latest information about incoming cars and even concept cars.</p>
                <p><span className="about-nav" onClick={() => navigate("/latest-news")}>Click Here!</span> to browse the latest car news.</p>
                <p><strong>Car information:</strong></p>
                <p>All the information you need to know about a specific car, we have a large number of cars on this website from normal family sedan to 2-doors supercars.</p>
                <p><span className="about-nav" onClick={() => navigate("/car-info")}>Click Here!</span> to browse the cars on this website.</p>
                <p><strong>Car comparison:</strong></p>
                <p>On this website you can even compare 2 or 3 cars together to see what is the different between the cars. You can compare to see what is more fitting to your style and you budget.</p>
                <p><span className="about-nav" onClick={() => navigate("/car-comparison")}>Click Here!</span> to start comparing cars together.</p>

            </div>
        </>
     );
}
 
export default About;