import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from '@material-ui/core';
import {Field} from 'formik';
import * as React from 'react';
import {JobTitle, technologies} from '../../types/Employee';

interface TechnologiesInputProps {
    forJobTitle: JobTitle;
}

export const TechnologiesInput: React.FC<TechnologiesInputProps> = ({forJobTitle}) => {
    const possibleTechnologies = technologies[forJobTitle];

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Technologies</FormLabel>
            <FormGroup>
                {possibleTechnologies.map(technology => (
                    <FormControlLabel
                        key={technology}
                        control={<Field as={Checkbox} value={technology} name="technologies" />}
                        label={technology}
                    />
                ))}
            </FormGroup>
        </FormControl>
    );
};
