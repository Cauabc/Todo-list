import { useState } from 'react'
import * as S from './AppStyles'
import SearchArea from './components/SearchArea/SearchArea'
import Task from './components/Task/Task'

function App() {
  
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState(0)

  const isTaskNameExists = (name) => {
    return tasks.some((task) => task.name === name);
  };
  
  function addTask(valorInput){
      if (!isTaskNameExists(valorInput)){
        const newTask = {
          id: Math.floor(Math.random() * 1000),
          name: valorInput,
          completed: false
        }
        setTasks([...tasks, newTask])
      }
      else{
        alert("Tarefa repetida")
      }
    
  }

  function removeTodo(taskId, index){
    handleTaskClick(index)
    setTasks(tasks.filter((task) => task.id !== taskId.id))
  }

  function handleTaskClick(taskIndex){
    tasks.map((item, index) => {
      if (index === taskIndex){
          item.completed = !item.completed
      } else{
        return item
      }
    })

    const completedCount = tasks.filter((item) => item.completed).length

    setCompletedTasks(completedCount)
  }

  return (
    <S.Container>
      <h1>TODOLIST</h1>
      <SearchArea handleClickButton={addTask} listTasks={tasks}/>
      {tasks.map((task, index) => <Task key={index} task={task} index={index} handleOnClick={handleTaskClick} removeTodo={removeTodo}/>)}
      <S.UnderInformations>
        <h1>Completed: <span>{completedTasks}</span></h1>
        <h1>Total: <span>{tasks.length}</span></h1>
      </S.UnderInformations>
    </S.Container>
  )
}


export default App
