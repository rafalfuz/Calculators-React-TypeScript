interface CalculatorState {
    first: number,
    second:number,
    result: string | number,
    history: string[]
}

const initialState = {
    first: 0,
    second: 0,
    result: "",
    history: []
}

export default (state=initialState, action) => {
    return state
}