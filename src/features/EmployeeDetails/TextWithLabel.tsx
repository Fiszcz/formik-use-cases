import {Typography} from '@material-ui/core';
import * as React from 'react';

interface TextWithLabelProps {
    label: string;
}

export const TextWithLabel: React.FC<TextWithLabelProps> = ({label, children}) => {
    return (
        <div>
            <Typography variant={'caption'}>{label}</Typography>
            <Typography variant={'body1'}>{children || '-'}</Typography>
        </div>
    );
};
