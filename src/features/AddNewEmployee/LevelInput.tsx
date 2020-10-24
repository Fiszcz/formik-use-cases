import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@material-ui/core';
import {useField} from 'formik';
import * as React from 'react';

export const LevelInput = () => {
    const [field] = useField('level');

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Level</FormLabel>
            <RadioGroup row aria-label="level" name="level" value={field.value} onChange={field.onChange}>
                <FormControlLabel value="junior" control={<Radio />} label="Junior" />
                <FormControlLabel value="regular" control={<Radio />} label="Regular" />
                <FormControlLabel value="senior" control={<Radio />} label="Senior" />
            </RadioGroup>
        </FormControl>
    );
};
