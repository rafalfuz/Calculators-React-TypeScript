import React from 'react'
import { AnotherButtons } from './AnotherButtons'
import { ArithmeticButtons } from './ArithmeticButtons'

interface Props {
    first: number,
    second: number
    setOperationResult: (result: number | string)=>void
    addHistory: (line: string)=> void
    clearHistory: ()=>void
    resetCalc: ()=>void
}

export const CalculatorButtons = ({first, second, setOperationResult, addHistory, clearHistory, resetCalc}: Props) => {

    return(
        <>
        <ArithmeticButtons 
            first={first} 
            second={second} 
            setOperationResult={setOperationResult} 
            addHistory={addHistory}/>
        <AnotherButtons clearHistory={clearHistory} resetCalc={resetCalc}/>
        </>

    )
}