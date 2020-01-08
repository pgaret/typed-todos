import React from 'react';
import classnames from 'classnames';
import { Task, Props } from './types';
import { TaskButton } from '../TaskButton';
const styles = require('./TaskRow.module.scss');

const TaskRow = (props: Props) => {
    const { task, finishTask, deleteTask } = props;

    function handleDeleteTask(taskId: number) {
        deleteTask(taskId);
    }

    function handleFinishTask(taskId: number) {
        finishTask(taskId);
    }

    const finished = task.status === true;
    const rowClass = classnames(styles.row, {
        [styles.finished]: finished 
    });

    return (
        <div key={task.id} className={rowClass}>
            <div>{task.name}</div>
            <div>
                <TaskButton
                    color='green'
                    text={finished ? 'Completed' : 'Finish'}
                    disabled={finished}
                    value={task.id}
                    handleClick={handleFinishTask}
                />
            </div>
            <div>
                <TaskButton
                    color='red'
                    text='Delete'
                    value={task.id}
                    handleClick={handleDeleteTask}
                />
            </div>
        </div>
    )
}

export default TaskRow;