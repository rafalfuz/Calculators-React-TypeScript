import React from 'react'

interface Props {
    result: number | string | undefined,
    first: number,
    second: number
}

export const CalculatorResult = ({result, first,second}: Props) => {
    return(
        <>
        <hr/>
            <div style={{fontSize: '22px', color: 'tomato'}}><strong>{result}</strong></div>
            <p> current values {first} and {second}</p>
        <hr/>
        </>
    )
}