import {Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import {css} from 'emotion';
import {ErrorMessage, Field, Form, Formik, useFormik} from 'formik';
import * as React from 'react';

import {useHistory} from 'react-router-dom';
import {employeeApi} from '../../api/employee';
import {ROUTES} from '../../Routes';
import {Employee, jobTitles} from '../../types/Employee';
import {formLayout, horizontalLayout} from '../../utils/styles';
import {AdditionalFormFields} from './AdditionalFormFields';
import {newEmployeeFormSchema, newEmployeeFormValidator} from './newEmployeeValidator';

const initialValuesOfForm: Employee = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    birthday: '',
    canWorkRemotely: false,
    hoursAWeek: 40,
    technologies: [],
    salary: 0,
};

export const NewEmployeeForm = () => {
    const history = useHistory();

    const handleSubmit = (values: Employee) => {
        employeeApi.addNewEmployee(values).then(() => history.push(ROUTES.WORKERS_LIST));
    };

    return (
        <Formik onSubmit={handleSubmit} initialValues={initialValuesOfForm} validationSchema={newEmployeeFormSchema}>
            {({errors, touched, values, handleChange, handleBlur, isValid}) => (
                <Form className={formLayout}>
                    {/*
                        First Name input
                    */}
                    <TextField
                        id={'first-name-input'}
                        label={'First name *'}
                        name={'firstName'}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                    />
                    {/*
                        Last Name input
                    */}
                    <TextField
                        id={'last-name-input'}
                        label={'Last name *'}
                        name={'lastName'}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                    />
                    {/*
                        Job Title input
                    */}
                    <FormControl error={Boolean(touched.jobTitle && errors.jobTitle)}>
                        <InputLabel id="select-label">Job Title *</InputLabel>
                        <Select
                            labelId="select-label"
                            name={'jobTitle'}
                            value={values.jobTitle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            {jobTitles.map(jobTitle => (
                                <MenuItem key={jobTitle} value={jobTitle}>
                                    {jobTitle}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{touched.jobTitle && errors.jobTitle}</FormHelperText>
                        {/*<FormHelperText><ErrorMessage name={'jobTitle'}/></FormHelperText>*/}
                        {/*<ErrorMessage name={'jobTitle'} component={FormHelperText}/>*/}
                    </FormControl>
                    {/*
                        Email input
                    */}
                    <TextField
                        id={'email-input'}
                        label={'Email'}
                        name={'email'}
                        value={values.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                    {/*<Field*/}
                    {/*    label={'Email'}*/}
                    {/*    name={'email'}*/}
                    {/*    error={Boolean(errors.email)}*/}
                    {/*    helperText={errors.email}*/}
                    {/*    as={TextField}*/}
                    {/*/>*/}
                    <AdditionalFormFields />
                    <div className={horizontalLayout}>
                        <Button variant={'outlined'} type={'reset'}>
                            Reset
                        </Button>
                        <Button variant={'contained'} type={'submit'} disabled={!isValid} color={'primary'}>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
