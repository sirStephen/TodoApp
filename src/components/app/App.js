import React from 'react';
import TodoList from "../todoList/TodoList";
import TodoItems from '../todoItems/TodoItems';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            search: '',
            currentTodo: {
                text: '',
                time: ''
            }
        }

    }

    handleInput = (event) => {
        const todoText = event.target.value;
        
        const currentTodo = {
            text: todoText,
            time: Date.now()
        }
        
        this.setState({
            currentTodo
        })

        event.preventDefault();
    }

    addTodos = (event) => {
        const newTodo = this.state.currentTodo;
        
        if (newTodo !== '') {
            const todos = [...this.state.todos, newTodo]
            
            this.setState({
                todos,
                currentTodo: {
                    text: '',
                    time: ''
                }
            })
        }
        
        event.preventDefault();
    }

    deleteTodo = (time) => {
        const filterTodos = this.state.todos.filter(todo => {
            return todo.time !== time
        });

        this.setState({
            todos: filterTodos
        });
    }

    onHandleSearch = (event) => {
        const searchText = event.target.value;

        const filterTodos = this.state.todos;
        // console.log(filterTodos)

        const filteredTodos = filterTodos.filter(todo => {
            console.log(todo.text.indexOf(searchText) !== -1)
            return todo.text.indexOf(searchText) !== -1;
        })

        // console.log(filteredTodos)

        this.setState({
            search: searchText
        });
    }

    render() {
        return(
            <div className="app">
                <TodoList 
                    addTodos={this.addTodos}
                    handleInput={this.handleInput}
                    currentTodo={this.state.currentTodo}
                    onHandleSearch={this.onHandleSearch}
                    search={this.state.search}
                    todos={this.state.todos}
                />

                <TodoItems
                    entries={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    }
}

export default App;