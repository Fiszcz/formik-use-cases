import {screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const selectOption = (label: string, option: string) => {
    const selectInput = screen.getByLabelText(label, {exact: false});

    userEvent.click(selectInput);

    const listbox = screen.getByRole('listbox');
    const optionToSelect = within(listbox).getByText(option);

    userEvent.click(optionToSelect);
};
