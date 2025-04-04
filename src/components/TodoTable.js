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

                <TodoRowItem 
                    rowNumber={propz.todos[0].rowNumber} 
                    rowDescription={propz.todos[0].rowDescription} 
                    rowAssigned={propz.todos[0].rowAssigned} 
                />
                <TodoRowItem 
                    rowNumber={propz.todos[1].rowNumber} 
                    rowDescription={propz.todos[1].rowDescription} 
                    rowAssigned={propz.todos[1].rowAssigned} 
                />
                <TodoRowItem 
                    rowNumber={propz.todos[2].rowNumber} 
                    rowDescription={propz.todos[2].rowDescription} 
                    rowAssigned={propz.todos[2].rowAssigned} 
                />

            </tbody>
        </table>
    )
}

export default TodoTable