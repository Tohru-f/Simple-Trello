import React from 'react'
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    const taskId =  uuid();
    if (inputText === "") return;
    e.preventDefault();
    setTaskList([...taskList, {id: taskId, draggableId: `task-${taskId}`, text: inputText}])
    setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add a task' className='taskAddInput' onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}
