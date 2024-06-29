import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  User,
  reauthenticateWithCredential,
  OAuthCredential,
} from "firebase/auth";
import { auth } from "../firebase";

interface responseType {
  isSuccess: boolean;
  user: User | null;
}

export const RegisterWithEmail = async (
  email: string,
  password: string
): Promise<responseType> => {
  const auth = getAuth();
  const response: responseType = {
    isSuccess: false,
    user: null,
  };

  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user: User = userCredential.user;

    response.isSuccess = true;
    response.user = user;
    /*
    {
  isSuccess: true,
  user: {
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYwOGU2ZTNmNzg4ZDYwMTk0MDA1ZGJi...",
    auth: AuthImpl,
    displayName: null,
    email: "tk94694@gmail.com",
    emailVerified: false,
    isAnonymous: false,
    metadata: UserMetadata,
    phoneNumber: null,
    photoURL: null,
    proactiveRefresh: ProactiveRefresh,
    providerData: [{...}],
    providerId: "firebase",
    reloadUserInfo: {...},
    stsTokenManager: StsTokenManager,
    tenantId: null,
    uid: "Hi66uLSJruWt42IuLXLpCmgOcgt1",
    refreshToken: "AMf-vBzPH_eWlJQoupwBTOWPvJh9hlIDUzGGyPg_PjLDYZiqF_...",
    ...
  }
}

    */
    return response;
  } catch (error: any) {
    // Handle specific error cases as needed
    console.error(`Error creating user: ${error.code} - ${error.message}`); // will use this for analysis, why login is failed
    // throw new Error(`Error creating user: ${error.code} - ${error.message}`);
    response.isSuccess = false;
    return response;
  }
};


// Function to re-authenticate user with stored tokens
export async function reauthenticateWithTokens(accessToken: string, refreshToken: string): Promise<void> {
  try {
    // Create AuthCredential using the stored tokens
    const credential = OAuthCredential.fromJSON({
      accessToken: accessToken,
      refreshToken: refreshToken,
      providerId: 'firebase', // Assuming Firebase as the identity provider
    }) as OAuthCredential; // Assert type to OAuthCredential

    if (!credential) {
      throw new Error('Failed to create OAuthCredential');
    }

    const user: User | null = auth.currentUser;
    if (user) {
      await reauthenticateWithCredential(user, credential);
      console.log('User re-authenticated successfully');
      // Proceed with sensitive operation after re-authentication
    } else {
      console.error('No user signed in');
    }
  } catch (error) {
    console.error('Error re-authenticating user:', error);
    // Handle re-authentication error
  }
}




                            // +---------------------+
                            // | Register a User      |
                            // | (createUserWithEmailAndPassword) |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Firebase returns    |
                            // | UserCredential      |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Sign In             |
                            // | (signInWithEmailAndPassword) |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Firebase returns    |
                            // | UserCredential      |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Perform Sensitive   |
                            // | Operation requiring |
                            // | re-authentication   |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Retrieve stored    |
                            // | Tokens (idToken,    |
                            // | refreshToken)       |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Create OAuthCredential |
                            // | from tokens         |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Re-authenticate     |
                            // | (reauthenticateWithCredential) |
                            // +-----------+---------+
                            //             |
                            //             v
                            // +---------------------+
                            // | Operation completes |
                            // +---------------------+
