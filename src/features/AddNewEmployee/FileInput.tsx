import {Button, Typography} from '@material-ui/core';
import {css} from 'emotion';
import {useFormikContext} from 'formik';
import * as React from 'react';
import {useRef} from 'react';
import {toBase64} from '../../utils/converterToBase64';

export const FileInput = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const {setFieldValue} = useFormikContext();

    const displayPhoto = async (file: File) => {
        const base64Image = await toBase64(file);
        if (imageRef.current) {
            imageRef.current.src = base64Image;
            imageRef.current.hidden = false;
        }
    };

    const handleChange = (event: React.ChangeEvent) => {
        const photoFile = (event.currentTarget as HTMLInputElement).files?.[0];
        setFieldValue('profilePhoto', photoFile);
        photoFile && displayPhoto(photoFile);
    };

    return (
        <div>
            <Typography variant={'caption'}>Profile Photo</Typography>
            <div className={profilePhotoUploadStyle}>
                <Button variant="contained" component="label" fullWidth>
                    Upload Profile Photo
                    <input type="file" style={{display: 'none'}} onChange={handleChange} name={'profilePhoto'} />
                </Button>
                <img ref={imageRef} hidden={true} alt={'Profile'} className={imageStyle} />
            </div>
        </div>
    );
};

const profilePhotoUploadStyle = css({
    display: 'grid',
    justifyItems: 'center',
});

const imageStyle = css({
    borderRadius: 15,
    marginTop: 16,
    width: '60%',
});
