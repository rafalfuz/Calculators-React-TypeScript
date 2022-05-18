import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Store'


export const CalculatorResult = () => {
    const {first, second, result} = useSelector((store: RootState)=>store.calculator)
    return(
        <>
        <hr/>
            <div style={{fontSize: '22px', color: 'tomato'}}><strong>{result}</strong></div>
            <p> current values {first} and {second}</p>
        <hr/>
        </>
    )
}