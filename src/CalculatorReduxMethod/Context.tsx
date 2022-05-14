import {ChangeEvent, createContext} from 'react'

interface CalculatorContextType{
    first: number,
    second: number,
    result: number | string,
    history: string[],
    addHistory: (line: string)=>void,
    clearHistory: ()=>void,
    resetCalc: ()=>void,
    setOperationResult: (operationResult: number | string)=> void
    handleFirstChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    handleSecondChange: (e:ChangeEvent<HTMLInputElement>)=>void

}

export const CalculatorContext = createContext<CalculatorContextType | null>(null)