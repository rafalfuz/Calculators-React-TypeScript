import React, { useContext } from 'react'
import { CalculatorContext } from '../Context'

export const CalculatorHistory = () => {

    const context = useContext(CalculatorContext)

    if(!context) return null
    const {history} = context
    return(
        <ul>
            {history
            .map((item, index)=><li key={index}>{item}</li>)
            .reverse()}
        </ul>
    ) 
}