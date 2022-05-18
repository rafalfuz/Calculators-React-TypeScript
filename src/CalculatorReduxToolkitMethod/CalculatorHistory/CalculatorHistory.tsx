import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Store'


export const CalculatorHistory = () => {

    const {history} = useSelector((store: RootState)=>store.calculator)

    return(
        <ul>
            {history
            .map((item, index)=><li key={index}>{item}</li>)
            .reverse()}
        </ul>
    ) 
}