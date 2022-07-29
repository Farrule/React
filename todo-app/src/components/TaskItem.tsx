import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../modules/tasksModule';
import { Task } from '../Types';

type Props = {
  task: Task
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className={task.done ? 'done' : ''}>
      {/* チェックボックスとチェックボックスを押したときにタスクを完了にする */}
      <label>
        <input
          type='checkbox'
          className='checkbox-input'
          onClick={() => dispatch(doneTask(task))}
          defaultChecked={ task.done }
        />
      {/* タスクの内容をもつ */}
      <span className='checkbox-label'>{ task.title }</span>
      </label>
      {/* ボタンを押したときにタスクを削除する */}
      <button
        onClick={() => dispatch(deleteTask(task))}
        className='btn is-delete'
      >delete</button>
    </li>
  );
};