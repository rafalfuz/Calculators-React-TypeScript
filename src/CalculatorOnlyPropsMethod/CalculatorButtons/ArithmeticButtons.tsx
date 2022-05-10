import React from 'react'
import {Button} from '../Components/Button/Button'
import {Operation} from '../CalculatorPropsMethod'

interface Props {
    first: number,
    second: number
    setOperationResult: (result: number | string)=>void
    addHistory: (line: string)=> void
}

export const ArithmeticButtons = ({first, second, setOperationResult, addHistory}:Props) => {

    const handleOperation = (operation: Operation) => {
        switch(operation){
            case Operation.ADD:{
                const operationResult = first + second
                setOperationResult(operationResult)
                addHistory(`${first} + ${second} = ${operationResult}`)
                break
            }
            case Operation.SUBTRACK:{
                const operationResult = first - second
                setOperationResult(operationResult)
                addHistory(`${first} - ${second} = ${operationResult}`)
                break
            }
            case Operation.MULTIPLY:{
                const operationResult = first * second
                setOperationResult(operationResult)
                addHistory(`${first} * ${second} = ${operationResult}`)
                break
            }
            case Operation.DIVIDE:{
                const operationResult = first / second
                if(second === 0 ){
                    setOperationResult('Nie mozna dzielic przez 0')
                }
                else setOperationResult(operationResult)
                addHistory(`${first} / ${second} = ${operationResult}`)
                break
            }
        }
    }

    return(
        <>
        <Button sign="+" onClick={()=>handleOperation(Operation.ADD)}/>
        <Button sign="-" onClick={()=>handleOperation(Operation.SUBTRACK)}/>
        <Button sign="*" onClick={()=>handleOperation(Operation.MULTIPLY)}/>
        <Button sign="/" onClick={()=>handleOperation(Operation.DIVIDE)}/>
        </>

    )
}