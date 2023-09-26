import {useState} from "react"

function SayName(props){

    const [greeting, setGreeting] = useState("Hi")


    return (
        <>
            <div className="panel panel-default">
                <div className="panel-body">
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
