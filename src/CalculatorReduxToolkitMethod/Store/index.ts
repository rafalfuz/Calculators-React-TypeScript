import { configureStore } from "@reduxjs/toolkit"
import { calculatorSlice } from "../Features/calculator-slice"


export const store = configureStore({
    reducer: {
        calculator: calculatorSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
//     calculator: {
//     first: number,
//     second: number,
//     result: string | number,
//     history: string[]
//      Tak ma wygladac struktura jezeli bysmy chcieli inne dane trzymac odzielnie musielibysmy stworzyc nowy reducer
// } 