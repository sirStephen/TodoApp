import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export const TodoItems = ({ entries, deleteTodo }) => {
    return(
        <div>
            {entries.map(todo => {
                return <div key={todo.time} className='is-flex display'>
                    <div className='p2 text'>{todo.text}</div>
                    <Moment className='p2'>{todo.time}</Moment>

                    <button 
                        className='delete-button'
                        type='submit'
                        onClick={() => deleteTodo(todo.time)}
                    >
                        Delete Task
                    </button>
                </div>
            })}

        </div>
    );
}

TodoItems.propTypes = {
    entries: PropTypes.array
};