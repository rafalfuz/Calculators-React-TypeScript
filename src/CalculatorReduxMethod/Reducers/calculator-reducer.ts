import {CalculatorAction} from './ActionTypes/calculator'

interface CalculatorState {
    first: number,
    second:number,
    result: string | number,
    history: string[]
}

const initialState: CalculatorState = {
    first: 0,
    second: 0,
    result: "",
    history: []
}

interface SetFirst {
    type: CalculatorAction.SET_FIRST,
    payload: number,
}

interface SetSecond { 
    type: CalculatorAction.SET_SECOND,
    payload: number
}

interface SetResult {
    type: CalculatorAction.SET_RESULT,
    payload: number | string
}

interface AddToHistory {
    type: CalculatorAction.ADD_TO_HISTORY,
    payload: string
}

interface ClearHistory {
    type: CalculatorAction.CLEAR_HISTORY,
}

interface ResetCalc {
    type: CalculatorAction.CLEAR_HISTORY,
}

type Action = SetFirst | SetSecond | SetResult | AddToHistory | ClearHistory | ResetCalc


export default (state=initialState, action: Action) => {
    return state
}