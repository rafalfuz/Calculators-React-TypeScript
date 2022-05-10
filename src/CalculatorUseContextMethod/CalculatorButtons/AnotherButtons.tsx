import React, {useContext} from 'react'
import {Button} from '../Components/Button/Button'
import { CalculatorContext } from '../Context'

export const AnotherButtons = () => {
    
    const context = useContext(CalculatorContext)
    
    if(!context) return null
    
    const {clearHistory, resetCalc, history} = context
    return(
        <>
        <Button sign="CLEAR HISTORY" onClick={clearHistory} width='120px' height='35px'/>
        <Button sign={`RESET (${history.length})`} onClick={resetCalc} width='120px' height='35px'/>
        </>
    )
}