import { useState } from "react"

function Button() {
    const [text, setText] = useState("Click me")

    const handleClick = () => {
        if (text == "Click me") {
            setText("Dont Click me.")
        } else if (text == "Dont Click me.") {
            setText("LAST warning.")
        } else if (text == "LAST warning.") {
            setText("Very LASTTT WArNiNGG!!")
        } 
    }


    return(
        <button onClick={() => handleClick()}>{text}</button>
    )

}

export default Button