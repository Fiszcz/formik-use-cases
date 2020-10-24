import {Typography} from '@material-ui/core';
import * as React from 'react';
import {NewEmployeeForm} from './NewEmployeeForm';

export const NewEmployeePage = () => {
    return (
        <>
            <Typography variant={'h4'}>New Employee Form</Typography>
            <NewEmployeeForm />
        </>
    );
};
