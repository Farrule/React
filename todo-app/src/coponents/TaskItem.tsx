import React from 'react';
import { Task } from './Types';

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task: Task) => void
}

export const TaskItem: React.FC<Props> = ({task, handleDone, handleDelete}) => {
  return (
    <li className={task.done ? 'done' : ''}>
      {/* チェックボックスとチェックボックスを押したときにタスクを完了にする */}
      <label>
        <input
          type='checkbox'
          className='checkbox-input'
          onClick={() => handleDone(task)}
          defaultChecked={task.done}
        />
      {/* タスクの内容をもつ */}
      <span className='checkbox-label'>{ task.title }</span>
      </label>
      {/* ボタンを押したときにタスクを削除する */}
      <button
        onClick={() => handleDelete(task)}
        className='btn is-delete'
      >delete</button>
    </li>
  );
};