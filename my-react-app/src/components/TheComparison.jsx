import React from "react";
//the form to add cars to comparison
const TheComparison = React.forwardRef((props,ref) => {
    const {updateModelSelection, currentManu,submitingCarToCompare, exitingTheComparison} = props;
    return (
        <form className="add-form " onSubmit={(e) => submitingCarToCompare(e)}>
            <button onClick={()=> exitingTheComparison()}>x</button>
            <h2>Add a car to comparison</h2>
            <select className="col-8" onChange={(e) => updateModelSelection(e)}>
                <option value="">Manufactor</option>
                <option value="infiniti">Infiniti</option>
                <option value="ford">Ford</option>
            </select>
            {
                currentManu == "infiniti" ?
                    <select className="col-8" ref={ref}>
                        <option value="">Model</option>
                        <option value="g37">G37</option>
                        <option value="q60">Q60</option>
                    </select> :
                    currentManu == "ford" ?
                        <select className="col-8" ref={ref}>
                            <option value="">Model</option>
                            <option value="mustang">Mustang</option>
                        </select> :
                        <select className="col-8">
                            <option value="">Model</option>
                        </select>
            }
            <input className="col-5" type="submit" />
        </form>

    );
})

export default TheComparison;