import React from "react"

function Joke(props){
    console.log(props)
    return(
        <div className="jokes">
            <h1 style={{display: !props.question && "none"}}>Question: {props.question}</h1>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchline}</h3>
        </div>
    )
}

export default Joke