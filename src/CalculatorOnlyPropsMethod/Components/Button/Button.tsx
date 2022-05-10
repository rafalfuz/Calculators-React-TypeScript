import React from "react"


interface Appearance {
    width?: string,
    height?: string,
    backgroundColor?: string,
    color?: string,
    borderRadious: number
    sign: string,
    fontSize: string
    onClick: ()=>void
}

export const Button = (props: Appearance) => {
    return(
        <button onClick={()=>props.onClick()}
        style=
        {
            {width: props.width, 
            height: props.height, 
            backgroundColor: props.backgroundColor, 
            color: props.color, 
            borderRadius: `${props.borderRadious}px`, 
            margin: '2px',
            fontSize: props.fontSize, 
            }}>
            {props.sign}
        </button>
    )
}

Button.defaultProps = {
    width: '35px',
    height: "35px",
    backgroundColor: 'black',
    color: "red",
    borderRadious: 50,
    fontSize:"12px",
}