import React from "react"

export const TodoRowItem: React.FC<{
    rowNumber: number,
    rowDescription: string,
    rowAssigned: string,
    deleteTodo: Function
}> = (propz) => {

    return (
        <tr onClick={() => propz.deleteTodo(propz.rowNumber)}>
            <th scope='row'>{propz.rowNumber}</th>
            <td>{propz.rowDescription}</td>
            <td>{propz.rowAssigned}</td>
        </tr>
    )
}
