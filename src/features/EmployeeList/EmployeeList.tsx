import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';
import {css} from 'emotion';
import * as React from 'react';
import {useQuery} from 'react-query';
import {employeeApi} from '../../api/employee';
import {ROUTES} from '../../Routes';
import {useHistory, generatePath} from 'react-router-dom';

export const EmployeeList = () => {
    const {data} = useQuery('employee_list', employeeApi.getEmployeeList);
    const history = useHistory();

    const goToAddNewPage = () => history.push(ROUTES.ADD_EMPLOYEE);

    const goToEmployeeDetails = (id?: number) => () =>
        history.push(generatePath(ROUTES.EMPLOYEE_DETAILS, {employeeId: id}));

    return (
        <>
            <Grid container justify="space-between">
                <Typography variant={'h4'}>Employee list</Typography>
                <Button variant={'outlined'} onClick={goToAddNewPage} type={'button'}>
                    Add new
                </Button>
            </Grid>
            <TableContainer component={Paper} className={tableContainerStyle}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <b>Name</b>
                            </TableCell>
                            <TableCell align="right">
                                <b>Job Title</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(employee => (
                            <TableRow
                                className={tableRowStyle}
                                hover
                                key={employee.id}
                                onClick={goToEmployeeDetails(employee.id)}
                            >
                                <TableCell component="th" scope="row">
                                    {employee.firstName} {employee.lastName}
                                </TableCell>
                                <TableCell align="right">{employee.jobTitle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

const tableContainerStyle = css({marginTop: 15});

const tableRowStyle = css({':hover': {cursor: 'pointer'}});
