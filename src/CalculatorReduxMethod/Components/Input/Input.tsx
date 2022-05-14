import React, { ChangeEvent } from 'react'

interface InputData {
    type: string,
    name: string
    value: number,
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

export const Input = (props: InputData) => {
    return(
        <input 
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        >         
        </input>
    )
}