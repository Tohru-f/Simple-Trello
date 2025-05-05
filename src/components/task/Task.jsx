import React from 'react'
import trashImg from "../../images/trash.png"
import { Draggable } from '@hello-pangea/dnd'


export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div className='taskBox' key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p className='taskText'>{task.text}</p>
          <button type="button" className='taskTrashButton' onClick={() => handleDelete(task.id)}>
            <img src={trashImg} alt="削除用ゴミ箱" />
          </button>
        </div>
      )}
    </Draggable>
  )
}
