import React, { useState } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { Task } from './components/TaskList/types';
import styles from './App.module.scss';

const App: React.FC = () => {
  const [ tasks, setTasks ] = useState<Array<Task>>([]);
  const [ currentId, setCurrentId ] = useState(1);

  const addTask = (taskName: String) => {
    const task = { id: currentId, name: taskName, status: false }
    setTasks([ task, ...tasks ]);
    setCurrentId(currentId + 1);
  }
  const deleteTask = (id: number) => {
    const index = tasks.findIndex((task: Task) => task.id === id);
    const slicedArray = tasks.slice(0, index).concat(tasks.slice(index+1));
    setTasks(slicedArray);
  }
  const finishTask = (id: number) => {
    const index = tasks.findIndex((task: Task) => task.id === id);
    tasks[index].status = true;
    setTasks([...tasks]);
  }

  return (
    <div className={styles.app}>
        <h1>Tasks</h1>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          finishTask={finishTask}
        />
    </div>
  );
}

export default App;
