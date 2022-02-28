import { Task } from '../interfaces/interfaces';

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}
export const TaskCard = ({ task, deleteTask }: Props) => {
  const { title, description, id } = task;

  return (
    <div className='card card-body bg-secondary rounded-0 text-dark'>
      <h2>{title}</h2>
      <p>{id}</p>
      <p>{description}</p>
      <button onClick={() => deleteTask(id!)} className='btn btn-danger'>
        Delete
      </button>
    </div>
  );
};
