import React from 'react';
import { Props } from './types';

const TaskButton = (props: Props) => {
    const {
        color,
        size,
        disabled,
        icon,
        character,
        text,
        styling,
        value,
        handleClick
    } = props;

    function processClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (value) {
            handleClick(value);
        } else {
            handleClick(e);
        }
    }

    return (
        <button
            onClick={processClick}
            style={{
                color: color || 'black'
            }}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default TaskButton;