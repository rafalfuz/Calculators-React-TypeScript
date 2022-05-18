import { createSlice } from "@reduxjs/toolkit";

interface CalculatorState {
    first: number,
    second: number,
    history: string[],
    result: number | string
}

const initialState : CalculatorState = {
    first: 0,
    second: 0,
    history: [],
    result: 0
}

interface SetFirst {
    payload: number
}

interface SetSecond {
    payload: number
}

interface SetResult {
    payload: number | string
}

interface AddToHistory {
    payload: string
}
interface ResetCalc {
    payload: {first: number, second: number, result: number}
}
interface ClearHistory {}
export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setFirst: (state, action: SetFirst) => {
            state.first = action.payload
        },
        setSecond: (state, action: SetSecond) => {
            state.second= action.payload
        },
        setResult: (state, action: SetResult) => {
            state.result = action.payload
        },
        addToHistory: (state, action:AddToHistory) => {
            state.history.push(action.payload)
        },
        clearHistory: (state, action: ClearHistory)=>{
            state.history = []
        },
        resetHistory: (state, action: ResetCalc)=>{
            state.first = action.payload.first
            state.second = action.payload.second
            state.result = action.payload.result
        }
    }
})

export const {setFirst, setSecond, setResult, clearHistory, addToHistory,resetHistory} = calculatorSlice.actions