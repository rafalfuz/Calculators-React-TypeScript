import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Button} from '../Components/Button/Button'
import { RootState } from '../Store'
import { clearHistory, setFirst, setSecond, setResult } from '../Reducers/actionCreators'


export const AnotherButtons = () => {
    const dispatch = useDispatch()
    const {history} = useSelector((store: RootState)=>store.calculator)

    const handleClearHistory = () => {
        dispatch(clearHistory())
    }
    const handleResetCalc = () => {
        dispatch(setFirst(0))
        dispatch(setSecond(0))
        dispatch(setResult(0))
    }
    return(
        <>
        <Button sign="CLEAR HISTORY" onClick={handleClearHistory} width='120px' height='35px'/>
        <Button sign={`RESET (${history.length})`} onClick={handleResetCalc} width='120px' height='35px'/>
        </>
    )
}