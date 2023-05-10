import { useEffect, useRef, useState } from 'react'
import Input from '../Input/Input'
import * as S from './styles'
import { GoPlus } from 'react-icons/go'

function SearchArea({handleClickButton}){
    const [inputValue, setInputValue] = useState("")
    const buttonRef = useRef()
    const [buttonIsAble, setButtonIsAble] = useState(true)

    useEffect(() => {

        if (inputValue !== ""){
            buttonRef.current.className = "notEmpty"
            setButtonIsAble(false)
        } else {
            buttonRef.current.className = ""
            setButtonIsAble(true)
        }
        
    }, [inputValue])

    function handleClick(){
        handleClickButton(inputValue)
        setInputValue("")
    }

    return(
        <S.Container>
            <Input placeholder={"Nome da tarefa"} setValueInput={setInputValue} getInputValue={inputValue}/>
            <button ref={buttonRef} disabled={buttonIsAble} onClick={handleClick}>{<GoPlus/>} Adicionar</button>
        </S.Container>
    )
}

export default SearchArea

