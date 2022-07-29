import './App.css';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

export const App: React.FC = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  )
}