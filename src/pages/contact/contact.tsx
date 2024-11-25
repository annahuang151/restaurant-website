import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, MenuItem, Typography, Box } from '@mui/material';
import styles from './styles.module.css';

type FormData = {
    type: string;
    name: string;
    email?: string;
    phone?: string;
    date?: string;
    eventPurpose?: string;
    details?: string;
    comment?: string;
};

const ContactPage: React.FC = () => {
    const { handleSubmit, register, watch, reset, formState: { errors } } = useForm<FormData>({
        defaultValues: { type: 'Inquiry Catering' },
    });

    const formType = watch('type'); // Watch the value of 'type'

    const onSubmit = (data: FormData) => {
        console.log('Form Data:', data);
        reset();
    };

    return (
        <div className={styles.contactPage}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                {/* Contact Type */}
                <TextField
                    {...register('type')}
                    select
                    label="Contact Type"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formType}  // Ensure the value is always set to formType
                >
                    <MenuItem value="Inquiry Catering">Inquiry Catering</MenuItem>
                    <MenuItem value="Contact">Contact</MenuItem>
                </TextField>

                {/* Name */}
                <TextField
                    {...register('name', { required: 'Name is required' })}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                {/* Conditional fields for Inquiry Catering */}
                {formType === 'Inquiry Catering' && (
                    <>
                        <TextField
                            {...register('email')}
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            {...register('phone')}
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            {...register('date')}
                            label="Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            {...register('eventPurpose')}
                            label="Purpose of Event"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            {...register('details')}
                            label="Inquiry Details"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                        />
                    </>
                )}

                {/* Conditional fields for Contact */}
                {formType === 'Contact' && (
                    <TextField
                        {...register('comment')}
                        label="Comment"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                    />
                )}
                <Button type="submit" variant="contained" color="success" fullWidth>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ContactPage;
