import { useRef, useState } from 'react'
import {InputStyle} from './styles'

function Input({name, id, placeholder, setValueInput, getInputValue}){

    const inputValue = useRef()

    return (
        <InputStyle>
            <input type="text" ref={inputValue} name={name} id={id} placeholder={placeholder} onChange={() => setValueInput(inputValue.current.value)} value={getInputValue}/>
        </InputStyle>
        )
}

export default Input