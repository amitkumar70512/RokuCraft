import { getAuth, createUserWithEmailAndPassword, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../firebase';

// Initialize Firebase
import {app} from '../firebase';
// Define the function to create a user
//export 
const RegisterWithEmail = async (email: string, password: string): Promise<User> => {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error: any) {
        // Handle specific error cases as needed
        throw new Error(`Error creating user: ${error.code} - ${error.message}`);
    }
};

// const user = RegisterWithEmail("test@abc.com", "password123");
// console.log("User created:", user);
