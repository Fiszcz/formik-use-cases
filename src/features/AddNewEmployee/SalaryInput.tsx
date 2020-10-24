import {TextField} from '@material-ui/core';
import {useFormikContext} from 'formik';
import * as React from 'react';
import NumberFormat, {NumberFormatValues} from 'react-number-format';
import {Employee} from '../../types/Employee';

export const SalaryInput = () => {
    const {values, setFieldValue} = useFormikContext<Employee>();

    const handleChange = (formatValues: NumberFormatValues) => {
        setFieldValue('salary', formatValues.floatValue);
    };

    return (
        <NumberFormat
            id={'salary-input'}
            thousandSeparator={true}
            prefix={'$ '}
            decimalScale={2}
            fixedDecimalScale={true}
            label={'Salary'}
            customInput={TextField}
            name={'salary'}
            value={values.salary}
            onValueChange={handleChange}
        />
    );
};
