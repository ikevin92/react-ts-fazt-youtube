import { AiOutlinePlus } from 'react-icons/ai';
import { FormEvent, useState } from 'react';
import { HandleInputChange, Task } from '../interfaces/interfaces';

interface Props {
  addNewTask: (task: Task) => void;
}

const inititalState = {
  title: '',
  description: '',
};

export const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState<Task>(inititalState);

  const { title, description } = task;

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(inititalState);
  };

  return (
    <div className='card card-body bg-secondary text-dark'>
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Write a title'
          className='form-control mb-3 rounded-0 shadow-none border-0'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name='description'
          id='description'
          rows={2}
          placeholder='Write a description'
          onChange={handleInputChange}
          value={description}
          className='form-control mb-3 shadow-none border-0'></textarea>
        <button className='btn btn-primary'>
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};
