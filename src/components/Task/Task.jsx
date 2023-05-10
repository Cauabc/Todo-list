import * as S from './styles'
import { BsTrash3Fill, BsCheck } from 'react-icons/bs'

function Task({task, removeTodo, index, handleOnClick, refCheckbox}){

    return(
        <>
            <S.Container>
                <input type="checkbox" ref={refCheckbox} name={task.name} id={task.name} checked={task.completed} readOnly />
                <label htmlFor={task.name} onClick={() => handleOnClick(index)}>{task.name}</label>
                <BsTrash3Fill onClick={() => removeTodo(task, index)} className='trash'/>
                <BsCheck className='inputChecked'/>
            </S.Container>
            
        </>
    )
}

export default Task
