import React from 'react';
import classnames from 'classnames';
import {
    Avatar,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { Task, Props } from './types';
import { TaskButton } from '../TaskButton';
const styles = require('./TaskRow.module.scss');

const TaskRow = (props: Props) => {
    const { task, finishTask, deleteTask } = props;

    const { id, name, status } = task;

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
        <ListItem>
            <ListItemIcon>
                { status ? <CheckIcon /> : <ListIcon /> }
            </ListItemIcon>
            <ListItemText
                primary={task.name}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="finish" onClick={() => handleFinishTask(id)}>
                    <CheckIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TaskRow;