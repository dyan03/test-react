import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

function MyTableComponent(props) {

    return (
        <TableRow>
            <TableCell >{props.id}</TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.age}</TableCell>
            <TableCell>{props.asset}</TableCell>
        </TableRow>

    )
}

export default MyTableComponent