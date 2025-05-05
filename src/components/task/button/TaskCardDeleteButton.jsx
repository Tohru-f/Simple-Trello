import React from 'react'
import closeImg from "../../../images/close.png";

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const TaskCardDeleteButton = (id) => {
    //タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
  }
  return (
    <div> 
      <button className="taskCardDeleteButton" onClick={() => TaskCardDeleteButton(taskCard.id)}>
        <img src={closeImg} alt="削除用アイコン" />
      </button>
    </div>
  )
}
