import { useRef } from 'react'
import {InputStyle} from './styles'

function Input({name, id, placeholder, setValueInput, getInputValue, keydownEvent}){

    const inputValue = useRef()

    return (
        <InputStyle>
            <input type="text" ref={inputValue} name={name} id={id} placeholder={placeholder} onKeyDown={keydownEvent} onChange={() => setValueInput(inputValue.current.value)} value={getInputValue}/>
        </InputStyle>
        )
}

export default Input