import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import { Task } from './interfaces/interfaces';

// components
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

interface Props {
  title?: string;
}

function App({ title = 'App React TS' }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn react from scratch',
      completed: false,
    },
  ]);

  const getCurrentTimeStamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimeStamp(), completed: false },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='bg-dark text-white' style={{ height: '100vh' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            <img src={logo} alt='React logo' style={{ width: ' 4rem' }} />
            {title}
          </a>
        </div>
      </nav>

      <main className='container p-4'>
        <div className='row'>
          <div className='col-md-4'>
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
