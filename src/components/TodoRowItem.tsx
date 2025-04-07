import React from "react"

function TodoRowItem(propz) {

    return (
        <tr onClick={() => propz.deleteTodo(propz.rowNumber)}>
            <th scope='row'>{propz.rowNumber}</th>
            <td>{propz.rowDescription}</td>
            <td>{propz.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem