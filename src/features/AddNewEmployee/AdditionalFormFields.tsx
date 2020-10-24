import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    Slider,
    Switch,
    TextField,
    Typography,
} from '@material-ui/core';
import {css} from 'emotion';
import {useFormikContext} from 'formik';
import {ChangeEvent} from 'react';
import * as React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Employee} from '../../types/Employee';
import {formLayout} from '../../utils/styles';
import {FileInput} from './FileInput';
import {LevelInput} from './LevelInput';
import {SalaryInput} from './SalaryInput';
import {TechnologiesInput} from './TechnologiesInput';

export const AdditionalFormFields = () => {
    const {handleChange, values, errors, setFieldValue} = useFormikContext<Employee>();

    const handleChangeSliderValue = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        setFieldValue('hoursAWeek', newValue);
    };

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Additional Fields</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={formLayout}>
                    {/*
                        Date Input
                    */}
                    <TextField
                        id="birthday-input"
                        label="Birthday"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name={'birthday'}
                        onChange={handleChange}
                        value={values.birthday}
                        error={Boolean(errors.birthday)}
                        helperText={errors.birthday}
                    />
                    {/*
                        Slider Input
                    */}
                    <div>
                        <Typography id="hours-a-week-slider" gutterBottom className={labelForHoursAWeek}>
                            Hours a week
                        </Typography>
                        <Slider
                            getAriaValueText={hoursAWeekSliderValuetext}
                            aria-labelledby="hours-a-week-slider"
                            valueLabelDisplay="on"
                            step={8}
                            min={0}
                            max={56}
                            marks
                            data-testid={'slider-input'}
                            name={'hoursAWeek'}
                            value={values.hoursAWeek}
                            onChange={handleChangeSliderValue}
                        />
                    </div>
                    {/*
                        Switch Input
                    */}
                    <FormControlLabel
                        control={
                            <Switch checked={values.canWorkRemotely} onChange={handleChange} name="canWorkRemotely" />
                        }
                        label="Remote Work"
                    />
                    {/*
                        Custom Checkbox Group Input
                    */}
                    {values.jobTitle && <TechnologiesInput forJobTitle={values.jobTitle} />}
                    {/*
                        Custom Radio Group Input
                    */}
                    <LevelInput />
                    {/*
                        Number Input With Mask
                    */}
                    <SalaryInput />
                    {/*
                        File Input
                    */}
                    <FileInput />
                </div>
            </AccordionDetails>
        </Accordion>
    );
};

function hoursAWeekSliderValuetext(value: number) {
    return `${value} hours`;
}

const labelForHoursAWeek = css({
    paddingBottom: 30,
});
