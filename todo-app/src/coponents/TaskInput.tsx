import { useState } from 'react';
import { Task } from './Types';

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
}

export const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
  const [ inputTitle, setInputTitle ] = useState<string>('');
  const [ count, setCount ] = useState<number>(tasks.length + 1);

  const handleINputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  }

  const handleSubmit = () => {
    setCount(count + 1);

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false
    };

    setTasks([newTask,...tasks]);
    setInputTitle('');
  }

  return (
    <div>
      <div className='inputForm'>
        <div className='inner'>
          <input
            type='text'
            className='input'
            value={inputTitle}
            onChange={handleINputChange}
          />
          <button onClick={handleSubmit} className='btn is-primary'>Add</button>
        </div>
      </div>
    </div>
  )
}