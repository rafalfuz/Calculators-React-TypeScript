import React, { useContext } from 'react'
import {Input} from '../Components/Input/Input'
import { CalculatorContext } from '../Context'

export const Form = () => {
    const context = useContext(CalculatorContext)

    if(!context) return null
    const {first, second, handleFirstChange, handleSecondChange} = context
    return(
        <>
        <Input type="number" name={first.toString()} value={first} onChange={handleFirstChange}/>
        <Input type='number' name={second.toString()} value={second} onChange={handleSecondChange}/>
        <hr/>
        </>
    )
}