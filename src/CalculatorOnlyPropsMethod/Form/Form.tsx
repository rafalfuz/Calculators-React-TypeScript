import React, { ChangeEvent } from 'react'
import {Input} from '../Components/Input/Input'

interface Props {
    first: number,
    second: number,
    handleFirstChange: (e: ChangeEvent<HTMLInputElement>)=>void,
    handleSecondChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

export const Form = ({first, second, handleFirstChange, handleSecondChange}:Props) => {
    return(
        <>
        <Input type="number" name={first.toString()} value={first} onChange={handleFirstChange}/>
        <Input type='number' name={second.toString()} value={second} onChange={handleSecondChange}/>
        <hr/>
        </>
    )
}