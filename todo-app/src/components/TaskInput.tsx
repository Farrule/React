import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import '../App.css';
import { addTask } from '../modules/tasksModule';

export const TaskInput: React.FC = () => {
  const dispatch = useDispatch();

  const [ inputTitle, setInputTitle ] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  }

  const handleSubmit = () => {
    dispatch(addTask(inputTitle));
    setInputTitle('');
  }

  return (
    <div className="input-form">
      <div className="inner">
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
          placeholder="タスクを入力してください"
        />
        <button onClick={handleSubmit} className="btn is-primary">Add</button>
      </div>
    </div>
  )
}