import React, { ReactElement } from 'react';
import { TaskRow } from '../TaskRow';
import { Task, Props } from './types';
import {
  Grid,
  List
} from '@material-ui/core';

const styles = require('./TaskList.module.scss');

const TaskList = (props: Props) => {
    const { tasks, finishTask, deleteTask } = props;
    console.log(styles);
    return (
        <section className={styles.row}>
            <Grid item xs={12} md={6}>
              <div>
                <List>
                  {tasks.map((task: Task) => <TaskRow key={task.id} task={task} finishTask={finishTask} deleteTask={deleteTask} />)}
                </List>
              </div>
            </Grid>
        </section>
    )
}

export default TaskList;