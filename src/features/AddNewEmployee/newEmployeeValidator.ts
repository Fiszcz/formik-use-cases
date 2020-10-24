import {FormikErrors} from 'formik';
import * as yup from 'yup';
import {Employee} from '../../types/Employee';
import {isEmailValid} from '../../utils/validators';

export const newEmployeeFormValidator = (values: Employee) => {
    const errors: FormikErrors<Employee> = {};

    if (!values.firstName) {
        errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    }

    if (!values.jobTitle) {
        errors.jobTitle = 'Job title is required';
    }

    if (values.email && !isEmailValid(values.email)) {
        errors.email = 'Invalid email';
    }

    if (values.birthday && new Date(values.birthday) > new Date()) {
        errors.birthday = 'Invalid birthday';
    }

    return errors;
};

/*
    Inne podejście do tematu walidacji.
    Wykorzystanie walidatora danych: np. yup albo joi.
    Dla Formika dobrym wyborem będzie Yep: https://github.com/jquense/yup
 */
export const newEmployeeFormSchema = yup.object({
    firstName: yup
        .string()
        .min(2)
        .max(20)
        .required()
        .label('First name'),
    lastName: yup
        .string()
        .min(5)
        .required()
        .label('Last name'),
    jobTitle: yup
        .string()
        .required()
        .label('Job title'),
    email: yup
        .string()
        .email()
        .label('Email'),
});
