import React from 'react';
import { TodoList } from "../todoList/TodoList";
import { TodoItems } from '../todoItems/TodoItems';
import { Search } from '../search/Search';

export default class App extends React.Component {
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

    onHandleSearch = (event) => {
        this.setState({
            search: event.target.value
        });
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


    render() {
        // THIS CAN WORK AS WELL
        // const filteredTodos = this.state.todos.filter(todo => {
        //     return todo.text.toLowerCase().includes(this.state.search.toLowerCase());
        // })

        const filteredTodos = this.state.todos.filter(todo => {
            return todo.text.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })

        console.log(filteredTodos)
        return(
            <div className="app">
                <div className='is-flex'>
                    <TodoList 
                        addTodos={this.addTodos}
                        handleInput={this.handleInput}
                        currentTodo={this.state.currentTodo}
                        todos={this.state.todos}
                    />

                    <Search
                        onHandleSearch={this.onHandleSearch}
                    />
                </div>

                <TodoItems
                    entries={filteredTodos}
                    deleteTodo={this.deleteTodo}
                />

            </div>
        );
    }
}