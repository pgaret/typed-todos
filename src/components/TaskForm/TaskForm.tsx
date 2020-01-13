import React, { useState } from 'react';
import { Props } from './types';

const TaskForm = (props: Props) => {
    const { addTask } = props;
    const [ value, changeValue ] = useState<string>('');

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
    }
    const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addTask(value);
        changeValue('');
    }

    return (
        <form>
            <label htmlFor='task-name'>Name</label>
            <input id='task-name' placeholder='Buy groceries' value={value} onChange={handleChangeValue} />
            <button type='submit'onClick={handleSubmitForm}>Add Task</button>
        </form>
    )
}

export default TaskForm;
