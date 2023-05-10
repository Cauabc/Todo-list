import * as S from './styles'
import { BsTrash3Fill, BsCheck } from 'react-icons/bs'

function Task({task, removeTodo, index, handleOnClick}){

    return(
        <>
            <S.Container>
                <input type="checkbox" name={task.name} id={task.name} />
                <label htmlFor={task.name} onClick={() => handleOnClick(index)}>{task.name}</label>
                <BsTrash3Fill onClick={() => removeTodo(index)} className='trash'/>
                <BsCheck className='inputChecked'/>
            </S.Container>
            
        </>
    )
}

export default Task
