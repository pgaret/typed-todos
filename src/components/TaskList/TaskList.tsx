import React from 'react';
import { TaskRow } from '../TaskRow';
import { Task, Props } from './types';
const styles = require('./TaskList.module.scss');

const TaskList = (props: Props) => {
    const { tasks, finishTask, deleteTask } = props;
    return (
        <section className={styles.taskList}>
            {tasks.map((task: Task) => <TaskRow key={task.id} task={task} finishTask={finishTask} deleteTask={deleteTask} />)}
        </section>
    )
}

export default TaskList;