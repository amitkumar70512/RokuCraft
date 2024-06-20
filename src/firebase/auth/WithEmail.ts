import { getAuth, createUserWithEmailAndPassword, User } from 'firebase/auth';

// Define the function to create a user
//export
export const RegisterWithEmail = async (email: string, password: string): Promise<User> => {
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
