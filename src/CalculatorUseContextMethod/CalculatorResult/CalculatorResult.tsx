import React, {useContext} from 'react'
import { CalculatorContext } from '../Context'

export const CalculatorResult = () => {
    const context = useContext(CalculatorContext)
    
    if(!context) return null
    
    const {first, second, result} = context
    return(
        <>
        <hr/>
            <div style={{fontSize: '22px', color: 'tomato'}}><strong>{result}</strong></div>
            <p> current values {first} and {second}</p>
        <hr/>
        </>
    )
}