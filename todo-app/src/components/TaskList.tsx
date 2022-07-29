import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import { TaskItem } from "./TaskItem";

export const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks)

  return (
    <div className="inner">
      {
        tasks.length <= 0 ? '登録されたタスクはありません' :
        <ul className="task-list">
          {
            tasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))
          }
        </ul>
      }
    </div>
  )
}