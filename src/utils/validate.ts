import { User } from '../types/User';

type Error = {
    [key: string]: string;
};

export const validate = (data: User): Error => {
    const errors: Error = {};
    if (!data.name) {
        errors.name = 'Name is required';
    }
    if (!data.email) {
        errors.email = 'E-mail is required';
    }
    if (!data.agree) {
        errors.agree = 'Terms is required';
    }

    return errors; 
};