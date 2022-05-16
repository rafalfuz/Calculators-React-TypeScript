import React from 'react'
import { CalculatorButtons } from './CalculatorButtons/CalculatorButtons'
import { CalculatorHistory } from './CalculatorHistory/CalculatorHistory'
import { CalculatorResult } from './CalculatorResult/CalculatorResult'
import {Form} from './Form/Form'
import { Provider } from 'react-redux'
import { store } from './Store'

export enum Operation {
    ADD,
    SUBTRACK,
    MULTIPLY,
    DIVIDE
}


export const CalculatorReduxMethod = () => {
     return (
        <Provider store={store}>
        <h1>Calculator</h1>
        <Form/>
        <CalculatorResult/>
        <CalculatorButtons/>
        <CalculatorHistory/>
        </Provider>

    )
}