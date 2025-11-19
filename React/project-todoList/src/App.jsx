import { useState } from 'react'
import './App.css'
import TodoListItem from './components/TodoListItem'



function App() {
  const [todos, setTodos] = useState("")
  const [finalTodoArr, setfinalTodoArr] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    if (!finalTodoArr.includes(todos)) {
      const finalArr = [...finalTodoArr, todos]
      setfinalTodoArr(finalArr)
    }
    else {
      alert("Value Allready Exist.")
    }
  }
  const handleDelete = (index) => {
    console.log(index);
    setfinalTodoArr(finalTodoArr.filter((item, i) => i !== index))
  }

  return (
    <>
      <div >
        <div>
          <h1>Todo List</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Task' name='todoname' onChange={e => (setTodos(e.target.value))} />
            <button className='savebtn' type='submit'>Save</button>
          </form>
          <TodoListItem item={finalTodoArr} onDelete={handleDelete} />
        </div>
      </div>
    </>
  )
}

export default App







