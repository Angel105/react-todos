function TodoRowItem(propz) {

    return (
        <tr>
            <th scope='row'>{propz.rowNumber}</th>
            <td>{propz.rowDescription}</td>
            <td>{propz.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem