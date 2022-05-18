import React, {ChangeEvent, useState} from 'react'

enum Operation {
    ADD,
    SUBTRACK,
    MULTIPLY,
    DIVIDE
}

export const CalculatorOneFile = () => {
    const [first, setFirst] = useState<number>(0)
    const [second, setSecond] = useState<number>(0)
    const [result, setResult] = useState<number | string>()
    const [history, setHistory] = useState<string[]>([])

    const handleFirstChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setFirst(Number(e.target.value))
    }

    const handleSecondChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setSecond(Number(e.target.value))
    }

    const addHistory = (line: string) => {
        setHistory((prev)=>[...prev, line])
    }

    const handleOperation = (operation: Operation) => {
        switch(operation){
            case Operation.ADD:{
                const operationResult = first + second
                setResult(first + second)
                addHistory(`${first} + ${second} = ${operationResult}`)
                break
            }
            case Operation.SUBTRACK:{
                const operationResult = first - second
                setResult(first - second)
                addHistory(`${first} - ${second} = ${operationResult}`)
                break
            }
            case Operation.MULTIPLY:{
                const operationResult = first * second
                setResult(first * second)
                addHistory(`${first} * ${second} = ${operationResult}`)
                break
            }
            case Operation.DIVIDE:{
                const operationResult = first / second
                if(second === 0 ){
                    setResult('Nie mozna dzielic przez 0')
                }
                else setResult(first / second)
                addHistory(`${first} / ${second} = ${operationResult}`)
                break
            }
        }
    }
    
    return (
        <>
        <h1>Calculator One File Code</h1>
        <input type='number' name='first' value={first} onChange={handleFirstChange}/>
        <input type='number' name='second' value={second} onChange={handleSecondChange}/>
        <hr/>
        <button onClick={()=>handleOperation(Operation.ADD)}>+</button>
        <button onClick={()=>handleOperation(Operation.SUBTRACK)}>-</button>
        <button onClick={()=>handleOperation(Operation.MULTIPLY)}>*</button>
        <button onClick={()=>handleOperation(Operation.DIVIDE)}>/</button>
        <hr/>
        <p><strong>{result}</strong></p>
        <hr/>
        <ul>
            {history
            .map((item, index)=><li key={index}>{item}</li>)
            .reverse()}
        </ul>
        </>

    )
}