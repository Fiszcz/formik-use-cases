import {render, screen, fireEvent, within, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {employeeApi} from '../../../../src/api/employee';
import {NewEmployeeForm} from '../../../../src/features/AddNewEmployee/NewEmployeeForm';
import {selectOption} from '../../helpers/selectInput';

describe('NewEmployeeForm', () => {
    test('should be possible to fill out the entire form', async () => {
        jest.spyOn(employeeApi, 'addNewEmployee');

        render(<NewEmployeeForm />);

        const firstNameInput = screen.getByLabelText(/First name/);
        await userEvent.type(firstNameInput, 'Filip');

        const lastNameInput = screen.getByLabelText(/Last name/);
        await userEvent.type(lastNameInput, 'Kowalski');

        selectOption('Job Title', 'Frontend Developer');

        const emailInput = screen.getByLabelText('Email');
        await userEvent.type(emailInput, 'some@email.pl');

        const birthdayInput = screen.getByLabelText('Birthday');
        fireEvent.change(birthdayInput, {target: {value: '10-25-2020'}});

        const accordion = screen.getByRole('button', {name: 'Additional Fields'});
        userEvent.click(accordion);

        const hoursAWeekSlider = screen.getByTestId('slider-input');
        fireEvent.change(hoursAWeekSlider.querySelector('input')!, {target: {value: 32}});

        const remoteWorkSwitch = screen.getByLabelText('Remote Work');
        userEvent.click(remoteWorkSwitch);

        const radioGroupForLevel = screen.getByRole('radiogroup', {name: /level/});
        const regularRadio = within(radioGroupForLevel).getByRole('radio', {name: 'Regular'});
        userEvent.click(regularRadio);

        const salaryInput = screen.getByLabelText('Salary');
        fireEvent.change(salaryInput, '1000');

        const checkboxGroupForTechnologies = screen.getByRole('group', {name: 'Technologies'});
        const reactCheckbox = within(checkboxGroupForTechnologies).getByRole('checkbox', {name: 'React'});
        const angularCheckbox = within(checkboxGroupForTechnologies).getByRole('checkbox', {name: 'Angular'});
        userEvent.click(reactCheckbox);
        userEvent.click(angularCheckbox);

        const submitButton = screen.getByRole('button', {name: 'Submit'});
        userEvent.click(submitButton);

        await waitFor(() => expect(employeeApi.addNewEmployee).toHaveBeenCalled());
        expect(employeeApi.addNewEmployee).toHaveBeenCalledWith({firstName: 'Filip'});
    }, 10000);
});
