import { useState } from "react"


function Form(){

    const [text, setText] = useState("")
    const [noSpaceText,setNoSpaceText] = useState("")

    function handleSubmit(event){
        //Stop the browser from sending form
        event.preventDefault()
        const form = event.target
        setText(form.nameInput.value)
    
    }

    function handleTextForNoSpace(event){
        // no spaces allowed
        const charToCheck = event.target.value.slice(-1)

        if(charToCheck!=" "){
            setNoSpaceText(event.target.value)
            //console.log(event.target.value)
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center m-3">
                <div className="d-flex flex-column justify-content-center">
                    <div className="border border-primary p-3">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nameInput">Enter Name:</label>
                            <input id="nameInput"type="text" placeholder="Enter Name"></input>
                            <button type="submit">Submit</button>
                            <p>{text}</p>
                        </form>
                    </div>
                    <div className="border border-primary p-3">
                        <p>Try typing spaces in the following text box, you cant!</p>
                        <textarea id="nospace" type="text" value={noSpaceText} onChange={handleTextForNoSpace}></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Form