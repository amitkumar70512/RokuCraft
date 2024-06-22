import { getAuth, createUserWithEmailAndPassword, UserCredential, User } from 'firebase/auth';

interface responseType {
  isSuccess: boolean;
  user: User | null;
}

export const RegisterWithEmail = async (email: string, password: string): Promise<responseType> => {
  const auth = getAuth();
  const response: responseType = {
    isSuccess: false,
    user: null,
  };

  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;

    response.isSuccess = true;
    response.user = user;

    return response;
  } catch (error: any) {
    // Handle specific error cases as needed
    console.error(`Error creating user: ${error.code} - ${error.message}`);// will use this for analysis, why login is failed
    // throw new Error(`Error creating user: ${error.code} - ${error.message}`);
    response.isSuccess = false;
    return response;
  }
};
