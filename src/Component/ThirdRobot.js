import React from 'react'

export default function ThirdRobot({userInput}) {
    const inputToBinary = (text) => {
        return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ')
    }

    return(
        <div>
            <p>I hear you saying {inputToBinary(userInput)}. Is that correct?</p>
        </div>
    )
}