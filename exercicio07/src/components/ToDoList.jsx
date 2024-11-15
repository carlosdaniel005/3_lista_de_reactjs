import React, { useState } from 'react';

const TaskList = () => {
  // Array inicial de tarefas
  const initialTasks = [
    { id: 1, text: 'Estudar React' },
    { id: 2, text: 'Almoçar' },
    { id: 3, text: 'Lavar a louça' }
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} 
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
