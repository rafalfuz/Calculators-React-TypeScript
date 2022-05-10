import React from 'react'
import {CalculatorOneFile} from './CalculatorInOneFile/Calculator'
import { CalculatorPropsMethod } from './CalculatorOnlyPropsMethod/CalculatorPropsMethod'
import { CalculatorUseContextMethod } from './CalculatorUseContextMethod/Calculator'

export const Calculator = () => {
    return(
        <>
        <h1>Calculator made on different ways</h1>
        <CalculatorOneFile />
        <CalculatorPropsMethod />
        <CalculatorUseContextMethod/>
        </>

    )
}