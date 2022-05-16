import React from 'react'
import {Button} from '../Components/Button/Button'
import {Operation} from '../Calculator'
import { useDispatch, useSelector } from 'react-redux'
import { RootState} from '../Store'
import { addToHistory, setResult } from '../Reducers/actionCreators'


export const ArithmeticButtons = () => {
    const dispatch = useDispatch()
    const {first, second} = useSelector((store:RootState)=>store.calculator)
    const handleSetOperationResult = (result: number | string) => {
        dispatch(setResult(result))
    }
    const handleAddHistory = (line: string) => {
        dispatch(addToHistory(line))
    }

    const handleOperation = (operation: Operation) => {
        switch(operation){
            case Operation.ADD:{
                const operationResult = first + second
                handleSetOperationResult(operationResult)
                handleAddHistory(`${first} + ${second} = ${operationResult}`)
                break
            }
            case Operation.SUBTRACK:{
                const operationResult = first - second
                handleSetOperationResult(operationResult)
                handleAddHistory(`${first} - ${second} = ${operationResult}`)
                break
            }
            case Operation.MULTIPLY:{
                const operationResult = first * second
                handleSetOperationResult(operationResult)
                handleAddHistory(`${first} * ${second} = ${operationResult}`)
                break
            }
            case Operation.DIVIDE:{
                const operationResult = first / second
                if(second === 0 ){
                    handleSetOperationResult('Nie mozna dzielic przez 0')
                }
                else handleSetOperationResult(operationResult)
                handleAddHistory(`${first} / ${second} = ${operationResult}`)
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