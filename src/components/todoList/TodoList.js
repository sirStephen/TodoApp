import React from 'react';

export const TodoList = ({ addTodos, currentTodo, handleInput }) => {
    return(
        <div className="todoListMain">
            <div className="header is-flex">
                <form onSubmit={addTodos} className='p2'>
                    <input 
                        placeholder="Task"
                        value={currentTodo.text}
                        onChange={handleInput}
                    />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </div>
    )
}