import { combineReducers, createStore } from "redux"
import calculatorReducer from "../Reducers/calculator-reducer"

const rootReducer = combineReducers({
    calculator: calculatorReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
//     calculator: {
//     first: number,
//     second: number,
//     result: string | number,
//     history: string[]
//      Tak ma wygladac struktura jezeli bysmy chcieli inne dane trzymac odzielnie musielibysmy stworzyc nowy reducer
// } 