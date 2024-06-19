import React, { useState } from "react";
import { LoginWithGoogle } from "../../firebase/auth/LoginWithGoogle";
// import { RegisterWithEmail } from "../../firebase/auth/LoginWithEmail";
import { Bot } from "../../firebase/interface";

/*

Register Flow:

1. User visits the login page.
2. User fills in the login form and clicks the "Sign Up" button.
3. Email and password are sent to the Firebase Authentication server.
4. Firebase Authentication creates a new user account, and returns a user object with id.
5. Take the user object and store it in the Firestore (bots) database with additional information.
6. Redirect the user to the home page.

- Password will be stored only in the firebase authentication server. Not the Firestore database (bots).


Register form fields:
- Name
- Username
- Email
- mobile
- Password
- Repeat password
- Terms and conditions checkbox

Fields Generated in background:
- id (Firebase Authentication)
- image (default image from Google), allow user to change it later
- isPremium (default false), true if coins > 0
- coins (default 0)
- isAdmin (default false)
- doc (date of creation)
- doe (date of expiry) -- 365 days from premium activation


*/

const Register: React.FC = () => {
    const [formData, setFormData] = useState<Bot>({
        id: "",
        name: "",
        userName: "",
        password: "",
        mobile: "",
        email: "",
        image: "",
        isPremium: false,
        coins: 0,
        isAdmin: false,
        doc: new Date(),
        doe: new Date(),
    })

    const [errors, setErrors] = useState<Partial<Bot>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: undefined,
        }));
    };

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const validationErrors: Partial<Bot> = {};

		if (!formData.name.trim()) {
			validationErrors.name = "Name is required";
		} else if (!/^[A-Za-z]+$/.test(formData.name)) {
			validationErrors.name = "Name is invalid";
		}
        if (!formData.userName.trim()) {
            validationErrors.userName = "Username is required";
        } else if (!/^[a-z0-9_.]{3,20}$/.test(formData.userName)) {
            validationErrors.userName = "Username is invalid";
        }

		if (!formData.email.trim()) {
			validationErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			validationErrors.email = "Email is invalid";
		}

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.password)) {
            validationErrors.password = "Password is invalid";
        }

        /* 
        if (!formData.mobile.trim()) {
            validationErrors.mobile = "Mobile is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            validationErrors.mobile = "Mobile is invalid";
        } */

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			console.log("errors: " + validationErrors);
			return;
		}

		// If there are no validation errors, proceed with form submission logic
		try {
            // import { RegisterWithEmail } from "../../firebase/auth/LoginWithEmail";
            // const user = await RegisterWithEmail(formData.email, formData.password);
			// console.log("User created successfully:", user);

			// Reset form fields after successful submission
			// setFormData({ name: "", email: "", message: "", timestamp: new Date() });

			// Optionally show success message to user
			alert("User created successfully!");
		} catch (error) {
			console.error("Error submitting form:", error);
			// Handle error, e.g., display an error message to the user
			alert("Failed to submit form. Please try again later.");
		}
	};




    return (
        // add login register form here
        <>
        
        </>
    );
}

/*

function Login() {
    const isLoggedIn = false;
    return (
        <div className="container-sm p-5 m-5 bg-light rounded">
                {
                    isLoggedIn && <>
                        <h1 className="text-center font-weight-bold text-primary">Login</h1>
                        <form className="p-2">
                            <div className="text-center mb-3">
                                <p>Sign in with:</p>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="loginName" className="form-control" />
              <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="loginPassword" className="form-control" />
              <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                  <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">

                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
            </div>
          </form>
        </>
      }
      {
        !isLoggedIn &&
                    <>
                    <h1 className="text-center font-weight-bold text-primary">Register</h1>
                        <form className="p-2" onSubmit={RegisterWithEmail}>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                          <button type="button" onClick={LoginWithGoogle} data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                          </button>

                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                          </button>
                        </div>

                        <p className="text-center">or:</p>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="registerName" className="form-control" />
                          <label className="form-label" htmlFor="registerName">Name</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="registerUsername" className="form-control" />
                          <label className="form-label" htmlFor="registerUsername">Username</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="registerEmail" className="form-control" />
                          <label className="form-label" htmlFor="registerEmail">Email</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="registerPassword" className="form-control" />
                          <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="registerRepeatPassword" className="form-control" />
                          <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                            aria-describedby="registerCheckHelpText" />
                          <label className="form-check-label" htmlFor="registerCheck">
                                    I have read and agree to the terms
                          </label>
                        </div>

                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Sign in</button>
                      </form>
                    </>
      }


    </div>
  );
}

*/

export default Register;