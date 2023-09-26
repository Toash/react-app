import { useState } from "react"


function Form(){

    const [text, setText] = useState("")
    
    function handleSubmit(event){
        //Stop the browser from sending form
        event.preventDefault()
        const form = event.target
        setText(form.nameInput.value)
    
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Enter Name:</label>
                <input id="nameInput"type="text" placeholder="Enter Name"></input>
                <button type="submit">Submit</button>
                <p>{text}</p>
            </form>

            <p>Try typing spaces in the following text box, you cant!</p>
        </>
    )
}



export default Form