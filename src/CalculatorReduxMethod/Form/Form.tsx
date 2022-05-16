import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Input} from '../Components/Input/Input'
import { setFirst, setSecond } from '../Reducers/actionCreators'
import { RootState} from '../Store'

export const Form = () => {
    const {first, second} = useSelector((store:RootState) => store.calculator)
    const dispatch = useDispatch()

    const handleFirstChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirst(Number(e.target.value)))
    }

    const handleSecondChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecond(Number(e.target.value)))
    }
    return(
        <>
        <Input type="number" name={first.toString()} value={first} onChange={handleFirstChange}/>
        <Input type='number' name={second.toString()} value={second} onChange={handleSecondChange}/>
        <hr/>
        </>
    )
}