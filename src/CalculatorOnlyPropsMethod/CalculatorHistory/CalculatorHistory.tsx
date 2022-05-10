import React from 'react'

interface Props {
    history: string[]
}

export const CalculatorHistory = ({history}: Props) => {
    return(
        <ul>
            {history
            .map((item, index)=><li key={index}>{item}</li>)
            .reverse()}
        </ul>
    ) 
}