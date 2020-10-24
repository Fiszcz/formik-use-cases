import MockDate from 'mockdate';
import {newEmployeeFormValidator} from '../../../src/features/AddNewEmployee/newEmployeeValidator';
import {Employee} from '../../../src/types/Employee';
import {employeeFactory} from '../../fixtures/employee.fixture';

describe('newEmployeeValidator', () => {
    test('should not set any error if all fields are correct', () => {
        const entryEmployee: Employee = {
            firstName: 'Filip',
            lastName: 'Szcześniak',
            jobTitle: 'Frontend Developer',
            email: 'correct@email.pl',
            birthday: '1996.01.13',
        };

        expect(newEmployeeFormValidator(entryEmployee)).toEqual({});
    });

    test('should set error for first name if first name is empty', () => {
        const entryEmployee = employeeFactory.build({firstName: ''});

        const errors = newEmployeeFormValidator(entryEmployee);
        expect(errors.firstName).toBe('First name is required');
    });

    test('should set error for last name if last name is empty', () => {
        const entryEmployee = employeeFactory.build({lastName: ''});

        const errors = newEmployeeFormValidator(entryEmployee);
        expect(errors.lastName).toBe('Last name is required');
    });

    test('should set error for job title if job title is empty', () => {
        const entryEmployee = employeeFactory.build({jobTitle: ''});

        const errors = newEmployeeFormValidator(entryEmployee);
        expect(errors.jobTitle).toBe('Job title is required');
    });

    test('should set error for email if entry email is not correct', () => {
        const entryEmployee = employeeFactory.build({email: 'wrong@email'});

        const errors = newEmployeeFormValidator(entryEmployee);
        expect(errors.email).toBe('Invalid email');
    });

    test('should set error for birthday if entry birthday is from the future', () => {
        MockDate.set('2020-10-24');
        const entryEmployee = employeeFactory.build({birthday: '2021.09.11'});

        const errors = newEmployeeFormValidator(entryEmployee);
        expect(errors.birthday).toBe('Invalid birthday');
    });
});
