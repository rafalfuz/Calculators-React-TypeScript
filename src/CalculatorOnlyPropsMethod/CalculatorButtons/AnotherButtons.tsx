import React from 'react'
import {Button} from '../Components/Button/Button'

interface Props {
    clearHistory: ()=>void
    resetCalc: ()=>void
}

export const AnotherButtons = ({clearHistory, resetCalc}: Props) => {
    return(
        <>
        <Button sign="CLEAR HISTORY" onClick={clearHistory} width='120px' height='35px'/>
        <Button sign="RESET" onClick={resetCalc} width='120px' height='35px'/>
        </>
    )
}