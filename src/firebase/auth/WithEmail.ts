import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  User,
  reauthenticateWithCredential,
  OAuthCredential,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

interface responseType {
  isSuccess: boolean;
  user: User | null;
}

export const RegisterWithEmail = async (
  email: string,
  password: string,
  userName: string
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
    if (auth.currentUser) {
      // After creating the user, update their profile with the userName
      await updateProfile(auth.currentUser, { displayName: userName });
    }
    console.log("====================================");
    console.log(user);
    console.log("====================================");
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

export const signInWithEmailAndPasswordFn = async (
  email: string,
  password: string
): Promise<{ isSuccess: boolean; error?: string }> => {
  try {
    // Sign in user with email and password
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully:", email);
    return { isSuccess: true };
  } catch (error) {
    console.error("Error signing in:", error);
    return { isSuccess: false, error: "" };
  }
};

// Function to re-authenticate user with stored tokens
export async function reauthenticateWithTokens(
  accessToken: string,
  refreshToken: string
): Promise<void> {
  try {
    // Create AuthCredential using the stored tokens
    const credential = OAuthCredential.fromJSON({
      accessToken: accessToken,
      refreshToken: refreshToken,
      providerId: "firebase", // Assuming Firebase as the identity provider
    }) as OAuthCredential; // Assert type to OAuthCredential

    if (!credential) {
      throw new Error("Failed to create OAuthCredential");
    }

    const user: User | null = auth.currentUser;
    if (user) {
      await reauthenticateWithCredential(user, credential);
      console.log("User re-authenticated successfully");
      // Proceed with sensitive operation after re-authentication
    } else {
      console.error("No user signed in");
    }
  } catch (error) {
    console.error("Error re-authenticating user:", error);
    // Handle re-authentication error
  }
}

export const updateDisplayName = async (
  newDisplayName: string
): Promise<{ isSuccess: boolean }> => {
  try {
    const user: User | null = auth.currentUser; // Fetch current user
    if (user) {
      await updateProfile(user, { displayName: newDisplayName });
      console.log("displayName updated successfully:", newDisplayName);
      return { isSuccess: true };
    } else {
      console.error("No user signed in");
      return { isSuccess: false };
    }
  } catch (error) {
    console.error("Error updating displayName:", error);
    return { isSuccess: false };
  }
};

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
