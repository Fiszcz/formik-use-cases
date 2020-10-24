import {Typography} from '@material-ui/core';
import {css} from 'emotion';
import * as React from 'react';
import {useQuery} from 'react-query';
import {employeeApi} from '../../api/employee';
import {useParams} from 'react-router-dom';
import {formatNumberToDollars} from '../../utils/formatNumber';
import {formLayout} from '../../utils/styles';
import {TextWithLabel} from './TextWithLabel';

export const EmployeeDetails = () => {
    const {employeeId} = useParams<{employeeId: string}>();
    const {data} = useQuery(['employee', employeeId], () => employeeApi.getEmployee(employeeId));

    return (
        <>
            <Typography variant={'h4'} className={headerStyle}>
                Employee Details
            </Typography>
            {data && (
                <div className={formLayout}>
                    {data.profilePhoto && (
                        <img
                            alt={`${data.firstName} ${data.lastName}`}
                            src={(data.profilePhoto as unknown) as string}
                            className={imageStyle}
                        />
                    )}
                    <TextWithLabel label={'First Name'}>{data.firstName}</TextWithLabel>
                    <TextWithLabel label={'Last Name'}>{data.lastName}</TextWithLabel>
                    <TextWithLabel label={'Job Title'}>{data.jobTitle}</TextWithLabel>
                    <TextWithLabel label={'Email'}>{data.email}</TextWithLabel>
                    <TextWithLabel label={'Birthday'}>{data.birthday}</TextWithLabel>
                    <TextWithLabel label={'Hours a Week'}>{String(data.hoursAWeek)}</TextWithLabel>
                    <TextWithLabel label={'Remote Work'}>{data.canWorkRemotely ? 'True' : 'False'}</TextWithLabel>
                    <TextWithLabel label={'Level'}>{data.level}</TextWithLabel>
                    <TextWithLabel label={'Salary'}>{formatNumberToDollars(data.salary || 0)}</TextWithLabel>
                    <TextWithLabel label={'Technologies'}>{data.technologies?.join(', ')}</TextWithLabel>
                </div>
            )}
        </>
    );
};

const headerStyle = css({marginBottom: '20px !important'});

const imageStyle = css({
    borderRadius: 15,
    width: '60%',
});
