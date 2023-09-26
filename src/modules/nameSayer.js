import {useState} from "react"

function SayName(props){

    const [greeting, setGreeting] = useState("Hi")


    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="border border-primary p-3 m-3">
                    <p>
                        {greeting}
                    </p>
                    <button onClick={() => setGreeting(`Hello, ${props.name}!`)}>Say Hello</button>
                    <button onClick={() => setGreeting(`Goodbye, ${props.name}!`)}>Say Goodbye</button>
                </div>
            </div>
        </>
    )
}

export default SayName
