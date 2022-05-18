import React from 'react'
import {CalculatorOneFile} from './CalculatorInOneFile/Calculator'
import { CalculatorPropsMethod } from './CalculatorOnlyPropsMethod/CalculatorPropsMethod'
import { CalculatorReduxMethod } from './CalculatorReduxMethod/Calculator'
import { CalculatorReduxToolkit } from './CalculatorReduxToolkitMethod/Calculator'
import { CalculatorUseContextMethod } from './CalculatorUseContextMethod/Calculator'

export const Calculator = () => {
    return(
        <>
        <h1>Calculator made on different ways</h1>
        <CalculatorOneFile />
        <CalculatorPropsMethod />
        <CalculatorUseContextMethod/>
        <CalculatorReduxMethod />
        <CalculatorReduxToolkit />
        </>

    )
}