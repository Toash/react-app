import { useState } from "react"
let on = false



function LightSwitch(){

    const [message, setMessage] = useState("off")

    return(
        <div className="d-flex justify-content-center">
            <div className="border border-primary p-3 ">
                <button onClick={flip}>Flip switch</button>
                <p>{message}</p>
            </div>
        </div>
    )
    function flip(){
        console.log("flipped switch")
        
        if(on){
            setMessage("off")
            document.body.style.backgroundColor = "#1f274f"
            on=  false;
        } else{
            setMessage("on")
            document.body.style.backgroundColor = "#cecfd6"
            on=  true;
        }
        
    }
}



/*
function GetLightStatus(props) {
    

    if (props.on) {
        return <p>Light is on</p>
    } else {
        return <p>Light is off</p>
    }

}
*/

export default LightSwitch