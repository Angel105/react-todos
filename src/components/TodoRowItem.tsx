import React from "react"

function TodoRowItem(propz: {
    rowNumber: number,
    rowDescription: string,
    rowAssigned: string,
    deleteTodo: Function
}) {

    return (
        <tr onClick={() => propz.deleteTodo(propz.rowNumber)}>
            <th scope='row'>{propz.rowNumber}</th>
            <td>{propz.rowDescription}</td>
            <td>{propz.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem;