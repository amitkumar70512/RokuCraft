import { redirect } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup, UserCredential } from 'firebase/auth';

export const LoginWithGoogle = async (): Promise<void> => {
    try {
        const data: UserCredential = await signInWithPopup(auth, provider);
        if (data.user.email) {
            console.log(data.user);
            // facing cors error
            localStorage.setItem('email', data.user.email);
            localStorage.setItem('name', data.user.displayName || '');
            redirect('./blog');
        }
    } catch (error) {
        console.error('Error signing in with popup', error);
    }
};
