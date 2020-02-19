import React from 'react';

export default class TodoList extends React.Component {
    render() {
        return(
            <div className="todoListMain">
                <div className="header is-flex">
                    <form onSubmit={this.props.addTodos} className='p2'>
                        <input 
                            placeholder="Task"
                            value={this.props.currentTodo.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}