import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {NewEmployeePage} from './features/AddNewEmployee/NewEmployeePage';
import {EmployeeDetails} from './features/EmployeeDetails/EmployeeDetails';
import {EmployeeList} from './features/EmployeeList/EmployeeList';

export enum ROUTES {
    WORKERS_LIST = '/workers-list',
    ADD_EMPLOYEE = '/new-employee',
    EMPLOYEE_DETAILS = '/employee/:employeeId',
}

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.WORKERS_LIST} component={EmployeeList} />
            <Route exact path={ROUTES.ADD_EMPLOYEE} component={NewEmployeePage} />
            <Route path={ROUTES.EMPLOYEE_DETAILS} component={EmployeeDetails} />
            <Redirect from={'*'} to={ROUTES.WORKERS_LIST} />
        </Switch>
    );
};
