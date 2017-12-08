import React, { PropTypes } from 'react';

const Todo = ({onClick, completed, text}) => (
    <li
        onclick={onClick}
        style={{
            textDecoration: completed ? 'line-trough' : 'none'
        }}
    >
        { text }
    </li>
);

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;