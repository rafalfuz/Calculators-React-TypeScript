import React, {ChangeEvent, useState} from 'react'
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

export const CalculatorPropsMethod = () => {
    const [first, setFirst] = useState<number>(0)
    const [second, setSecond] = useState<number>(0)
    const [result, setResult] = useState<number | string>()
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
        <>
        <h1>Calculator</h1>
        <Form 
            first={first} 
            second={second} 
            handleFirstChange={handleFirstChange} 
            handleSecondChange={handleSecondChange}
        />
        <CalculatorResult 
            first={first} 
            second={second}
            result={result}
        />
        <CalculatorButtons 
            first={first} 
            second={second} 
            setOperationResult={setOperationResult} 
            addHistory={addHistory}
            clearHistory={clearHistory}
            resetCalc={resetCalc}
        />
        <CalculatorHistory history={history}/>
        </>

    )
}