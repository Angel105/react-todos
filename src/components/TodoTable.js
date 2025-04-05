import TodoRowItem from './TodoRowItem';

function TodoTable(propz) {
    
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
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable