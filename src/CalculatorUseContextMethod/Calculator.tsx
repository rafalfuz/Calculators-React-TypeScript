import React, {ChangeEvent, useState} from 'react'
import { CalculatorContext } from './Context'
import { CalculatorButtons } from './CalculatorButtons/CalculatorButtons'
import { CalculatorHistory } from './CalculatorHistory/CalculatorHistory'
import { CalculatorResult } from './CalculatorResult/CalculatorResult'
import {Form} from './Form/Form'

export enum Operation {
    ADD,
    SUBTRACK,
    MULTIPLY,
    DIVIDE
}


export const CalculatorUseContextMethod = () => {
    const [first, setFirst] = useState<number>(0)
    const [second, setSecond] = useState<number>(0)
    const [result, setResult] = useState<number | string>(0)
    const [history, setHistory] = useState<string[]>([])

    const handleFirstChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setFirst(Number(e.target.value))
    }

    const handleSecondChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setSecond(Number(e.target.value))
    }

    const addHistory = (line: string) => {
        setHistory((prev)=>[...prev, line])
    }

    const setOperationResult = (operationResult: number | string) => {
        setResult(operationResult)
    }
    
    const clearHistory = () => {
        setHistory(()=>[])
    }

    const resetCalc = () => {
        setFirst(0)
        setSecond(0)
        setResult(0)
    }
    return (
        <CalculatorContext.Provider value={
{            first, 
            second, 
            result, 
            history, 
            addHistory, 
            clearHistory, 
            resetCalc, 
            setOperationResult,
            handleFirstChange,
            handleSecondChange}
        }>
        <h1>Calculator</h1>
        <Form/>
        <CalculatorResult/>
        <CalculatorButtons/>
        <CalculatorHistory/>
        </CalculatorContext.Provider>

    )
}