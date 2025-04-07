import React from 'react';
import { TodoRowItem }  from './TodoRowItem';

export const TodoTable: React.FC<{todos: TodoModel[], deleteTodo: Function }> = (propz) => {
    
    return (
        <table className="table table-hover" >
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {propz.todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={propz.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}
