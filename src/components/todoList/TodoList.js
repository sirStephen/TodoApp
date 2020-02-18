import React from 'react';

class TodoList extends React.Component {
    render() {
        // const filterTodos = this.props.todos;
        // console.log(filterTodos)

        // const filteredTodos = filterTodos.filter(todo => {
        //     console.log(todo.text.indexOf(this.props.search) !== -1)
        //     return todo.text.indexOf(this.props.search) !== -1;
        // })

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
                    <div className='p2 search'>
                        <input 
                            type="text"
                            placeholder='Search Tasks'
                            value={this.props.search}
                            onChange={this.props.onHandleSearch}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;