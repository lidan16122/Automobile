import React, { Component, createRef } from "react";
import "../styles/comparison.css"
import TheComparison from "./TheComparison";
import g37Img from "../assets/infiniti-g37.jpg"
import fordMustangImg from "../assets/ford-mustang.jpg"
import q60Img from "../assets/infiniti-q60.jpg"
import CarsInfoObj from "../obj/carsInfoObj";

//car objects
const G37 = new CarsInfoObj("Infiniti G37", "2009 - 2014", g37Img, "Sport Luxury", "Sedan", "55,000₪ - 100,000₪", 55000, "Automatic", "Petrol", "3.7L V-6", false, "Rear Wheel Drive", "6", "315", '35 kg-m', "250 kph", "5.9 sec", "12 Liters per 100 km", "5/5", "6", true, true, "7", true)
const Mustang = new CarsInfoObj("Ford Mustang", "2015 - 2023", fordMustangImg, "Sport", "Sedan", "230,000₪", 230000, "Automatic", "Turbo Petrol", "2.3L Inline 4", true, "Rear Wheel Drive", "4", "310", '38.1 kg-m', "233 kph", "5.5 sec", "10 Liters per 100 km", "5/5", "7", true, true, "6", false)
const Q60 = new CarsInfoObj("Infiniti Q60", "2016 - 2022", q60Img, "Sport Luxury", "Coupe", "550,000₪", 550000, "Automatic", "Turbo Petrol", "3.0L V-6", true, "All Wheel Drive", "6", "400", '48.4 kg-m', "250 kph", "4.9 sec", "10.6 Liters per 100 km", "5/5", "6", true, true, "13", false)

class CarComparison extends Component {
    constructor(props) {
        super(props)
        //adding states to use and to check the user selection
        this.state = {
            car1: undefined,
            car2: undefined,
            car3: undefined,
            currentManu: "",
            car1Obj: {},
            car2Obj: {},
            car3Obj: {},

        }
        //create ref to check the value of the form without rendering the component again
        this.currentModel = createRef();
    }
    //exiting the adding car to the list form and checking which card was used
    exitingTheComparison = () => {
        this.setState({currentManu: ""})
        if (this.state.car1 == "change") this.setState({ car1: undefined })
        else if (this.state.car2 == "change") this.setState({ car2: undefined })
        else this.setState({ car3: undefined })
    }
    //updating the form of the selected manufactor to get the correct manufactor models
    updateModelSelection = (e) => {
        this.setState({ currentManu: e.target.value })
    }
    //checking which card was submitted and updating the state to the correct card
    submitingCarToCompare = (e) => {
        e.preventDefault()
        this.setState({currentManu: ""})
        if (this.state.car1 == "change") {
            this.setState({ car1: this.currentModel.current.value })
            if (this.currentModel.current.value == "g37") this.setState({ car1Obj: G37 })
            else if (this.currentModel.current.value == "mustang") this.setState({ car1Obj: Mustang })
            else if (this.currentModel.current.value == "q60") this.setState({ car1Obj: Q60 })

        }
        else if (this.state.car2 == "change") {
            this.setState({ car2: this.currentModel.current.value })
            if (this.currentModel.current.value == "g37") this.setState({ car2Obj: G37 })
            else if (this.currentModel.current.value == "mustang") this.setState({ car2Obj: Mustang })
            else if (this.currentModel.current.value == "q60") this.setState({ car2Obj: Q60 })
        }
        else {
            this.setState({ car3: this.currentModel.current.value })
            if (this.currentModel.current.value == "g37") this.setState({ car3Obj: G37 })
            else if (this.currentModel.current.value == "mustang") this.setState({ car3Obj: Mustang })
            else if (this.currentModel.current.value == "q60") this.setState({ car3Obj: Q60 })
        }
    }


    render() {
        return (
            <>
                <div className="comparison-img"></div>
                <h1 className="comparison-title mt-5">Car Comparison</h1>
                {/* checking if any of the states/cards was clicked by the user, and if clicked a form will appear */}
                {this.state.car1 == "change" || this.state.car2 == "change" || this.state.car3 == "change" ? <TheComparison updateModelSelection={this.updateModelSelection} ref={this.currentModel} currentManu={this.state.currentManu} submitingCarToCompare={this.submitingCarToCompare} exitingTheComparison={this.exitingTheComparison} /> : ""}
                {/* updating the cards if the user selected any value */}
                <div className="container">
                    <div className="row pt-5 pb-5 justify-content-around">
                        {
                            this.state.car1 ?
                                <img src={this.state.car1Obj.img} className="col-4 img-pointy" onClick={() => this.setState({ car1: "change", car1Obj: {} })} /> :
                                <div className="col-4 add-compare" onClick={() => this.setState({ car1: "change" })}> + </div>
                        }
                        {
                            this.state.car1 ?
                                this.state.car2 ?
                                    <img src={this.state.car2Obj.img} className="col-4 img-pointy" onClick={() => this.setState({ car2: "change", car2Obj: {} })} /> :
                                    <div className="col-4 add-compare" onClick={() => this.setState({ car2: "change" })}> + </div> :
                                <div className="col-4 add-compare blocked"> + </div>
                        }
                        {
                            this.state.car2 ?
                                this.state.car3 ?
                                    <img src={this.state.car3Obj.img} className="col-4 img-pointy" onClick={() => this.setState({ car3: "change", car3Obj: {} })} /> :
                                    <div className="col-4 add-compare" onClick={() => this.setState({ car3: "change" })}> + </div> :
                                <div className="col-4 add-compare blocked"> + </div>
                        }
                        {/* adding a reset button incase the user want to remove a specific card */}
                        <button className="reset-button" onClick={() => this.setState({ car1: this.state.car2, car1Obj: this.state.car2Obj, car2: this.state.car3, car2Obj: this.state.car3Obj, car3: undefined, car3Obj: {} })}> X </button>
                        <button className={`reset-button ${!this.state.car1 ? "blocked" : ""}`} onClick={() => this.setState({ car2: this.state.car3, car2Obj: this.state.car3Obj, car3: undefined, car3Obj: {} })}> X </button>
                        <button className={`reset-button ${!this.state.car2 ? "blocked" : ""}`} onClick={() => this.setState({ car3: undefined, car3Obj: {} })}> X </button>
                    </div>
                    <table className="container comparison-table">
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
                                <td className="col-4">{this.state.car1Obj.carModel}</td>
                                <td className="col-4">{this.state.car2Obj.carModel}</td>
                                <td className="col-4">{this.state.car3Obj.carModel}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Car Production Years
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.carYears}</td>
                                <td className="col-4">{this.state.car2Obj.carYears}</td>
                                <td className="col-4">{this.state.car3Obj.carYears}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Category
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.category}</td>
                                <td className="col-4">{this.state.car2Obj.category}</td>
                                <td className="col-4">{this.state.car3Obj.category}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Type
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.type}</td>
                                <td className="col-4">{this.state.car2Obj.type}</td>
                                <td className="col-4">{this.state.car3Obj.type}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Price
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.price}</td>
                                <td className="col-4">{this.state.car2Obj.price}</td>
                                <td className="col-4">{this.state.car3Obj.price}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Transmission
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.transmission}</td>
                                <td className="col-4">{this.state.car2Obj.transmission}</td>
                                <td className="col-4">{this.state.car3Obj.transmission}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Engine Type
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.engineType}</td>
                                <td className="col-4">{this.state.car2Obj.engineType}</td>
                                <td className="col-4">{this.state.car3Obj.engineType}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Engine
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.engine}</td>
                                <td className="col-4">{this.state.car2Obj.engine}</td>
                                <td className="col-4">{this.state.car3Obj.engine}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Turbo
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.hasTurbo == undefined ? "" : this.state.car1Obj.hasTurbo ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car2Obj.hasTurbo == undefined ? "" : this.state.car2Obj.hasTurbo ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car3Obj.hasTurbo == undefined ? "" : this.state.car3Obj.hasTurbo ? "Yes" : "No"}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Powertrain
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.Powertrain}</td>
                                <td className="col-4">{this.state.car2Obj.Powertrain}</td>
                                <td className="col-4">{this.state.car3Obj.Powertrain}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Cylinders Number
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.cylinders}</td>
                                <td className="col-4">{this.state.car2Obj.cylinders}</td>
                                <td className="col-4">{this.state.car3Obj.cylinders}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Horse Power
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.horsePower}</td>
                                <td className="col-4">{this.state.car2Obj.horsePower}</td>
                                <td className="col-4">{this.state.car3Obj.horsePower}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Max Torque
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.Torque}</td>
                                <td className="col-4">{this.state.car2Obj.Torque}</td>
                                <td className="col-4">{this.state.car3Obj.Torque}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Top Speed
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.topSpeed}</td>
                                <td className="col-4">{this.state.car2Obj.topSpeed}</td>
                                <td className="col-4">{this.state.car3Obj.topSpeed}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Acceleration 0-100 km/h
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.acceleration}</td>
                                <td className="col-4">{this.state.car2Obj.acceleration}</td>
                                <td className="col-4">{this.state.car2Obj.acceleration}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Average Fuel Consumption
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.fuelAvg}</td>
                                <td className="col-4">{this.state.car2Obj.fuelAvg}</td>
                                <td className="col-4">{this.state.car3Obj.fuelAvg}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Safety Grade
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.safetyGrade}</td>
                                <td className="col-4">{this.state.car2Obj.safetyGrade}</td>
                                <td className="col-4">{this.state.car3Obj.safetyGrade}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Number of Airbags
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.airbagNum}</td>
                                <td className="col-4">{this.state.car2Obj.airbagNum}</td>
                                <td className="col-4">{this.state.car3Obj.airbagNum}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Leather Seats
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.hasLeather == undefined ? "" : this.state.car1Obj.hasLeather ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car2Obj.hasLeather == undefined ? "" : this.state.car2Obj.hasLeather ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car3Obj.hasLeather == undefined ? "" : this.state.car3Obj.hasLeather ? "Yes" : "No"}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Heated Seats
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.hasHeatedSeats == undefined ? "" : this.state.car1Obj.hasHeatedSeats ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car2Obj.hasHeatedSeats == undefined ? "" : this.state.car2Obj.hasHeatedSeats ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car3Obj.hasHeatedSeats == undefined ? "" : this.state.car3Obj.hasHeatedSeats ? "Yes" : "No"}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Number of Speakers
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.speakerNum}</td>
                                <td className="col-4">{this.state.car2Obj.speakerNum}</td>
                                <td className="col-4">{this.state.car3Obj.speakerNum}</td>
                            </tr>
                            <tr className="row">
                                <td className="col-12">
                                    Sunroof
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="col-4">{this.state.car1Obj.hasSunRoof == undefined ? "" : this.state.car1Obj.hasSunRoof ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car2Obj.hasSunRoof == undefined ? "" : this.state.car2Obj.hasSunRoof ? "Yes" : "No"}</td>
                                <td className="col-4">{this.state.car3Obj.hasSunRoof == undefined ? "" : this.state.car3Obj.hasSunRoof ? "Yes" : "No"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default CarComparison;
