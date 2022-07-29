import { useState } from 'react';
import './App.css';
import { TaskInput } from './coponents/TaskInput';
import { TaskList } from './coponents/TaskList';
import { Task } from './coponents/Types';

const initialState: Task[] = [
  {
    id: 2,
    title: 'つぎにやるタスク',
    done: false
  },
  {
    id: 1,
    title: 'はじめにやるタスク',
    done: true
  }
]

export const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}