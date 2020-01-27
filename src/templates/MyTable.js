import React, { fragment, Fragment } from 'react'

import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'

import MyTableComponent from './MyTableComponent'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
});

var sampleData = [
    { id: '01', name: 'LEE JUN HYUNG', age: '27', asset: 3000 },
    { id: '02', name: 'KIM DO YEON', age: '29', asset: 3000 },
    { id: '03', name: 'HONG SUNG JUN', age: '29', asset: 3000 },
    { id: '04', name: 'AHN DAE YOUNG', age: '28', asset: 3000 },
]

function MyTable() {

    return (
        <Paper className="pp">
            <Table className="tb">
                <TableHead>
                    <TableRow>
                        <TableCell> ID </TableCell>
                        <TableCell> NAME </TableCell>
                        <TableCell> AGE </TableCell>
                        <TableCell> ASSET </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sampleData.map(row => {
                        return (
                            <MyTableComponent id={row.id} name={row.name} age={row.age} asset={row.asset} />
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default (MyTable);