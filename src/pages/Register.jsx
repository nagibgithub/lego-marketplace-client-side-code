import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleLogIn from "../components/loginCompo/GoogleLogin";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { updateProfile } from "firebase/auth";
import pageTitle from "../hooks/pageTitle";

const Register = () => {

    pageTitle('Lego Store | Register');

    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const emailPassRegHandler = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setErrorMessage('')

        if (password !== confirm) {
            setErrorMessage('')
            setErrorMessage("Password don't match")
            return;
        }

        if (!/(?=.*[a-z])/.test(password)) {
            setErrorMessage('Please add at least one alphabet');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setErrorMessage('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setErrorMessage('Please add at least 6 characters in your password')
            return;
        }

        const updateUserData = (user, displayName, photoURL) => {
            updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL
            })
                .then(() => {
                    console.log('user name updated')
                })
                .catch(error => {
                    setErrorMessage(error.message);
                })
        }


        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserData(result.user, displayName, photoURL);
                setErrorMessage('')
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    return (
        <div>
            <div className='login-container'>
                <div className='bg-black bg-opacity-60'>
                    <h1 className="text-2xl lg:text-5xl pt-5 mb-5 text-center font-bold text-white">Register in Nagib Lego Store...!</h1>
                    <div className="login-form-container">
                        <form onSubmit={emailPassRegHandler}>
                            <div className="form-control py-2">
                                <label><span className="text-white">Full Name</span></label>
                                <input name="name" type="text" placeholder="Your Name" className="input-field" required />
                            </div>
                            <div className="form-control py-2">
                                <label><span className="text-white">Email</span></label>
                                <input name="email" type="email" placeholder="Email" className="input-field" autoComplete="current-email" required />
                            </div>
                            <div className="form-control py-2">
                                <label><span className="text-white">Photo URL</span></label>
                                <input name="photo" type="url" placeholder="Photo Url" className="input-field" required />
                            </div>
                            <div className="form-control py-2">
                                <label><span className="text-white">Password <FontAwesomeIcon icon={show ? faEye : faEyeSlash}></FontAwesomeIcon></span></label>
                                <input name="password" type={show ? 'text' : 'password'} placeholder="Password" className="input-field" autoComplete="new-password" required />
                            </div>
                            <div className="form-control py-2">
                                <label><span className="text-white">Confirm Password <FontAwesomeIcon icon={show ? faEye : faEyeSlash}></FontAwesomeIcon></span></label>
                                <input name="confirm" type={show ? 'text' : 'password'} placeholder="Re-type your password" className="input-field" autoComplete="new-password" required />
                            </div>
                            <div onClick={() => setShow(!show)} className="text-white cursor-pointer my-2 w-max">{show ? "Hide" : "Show"} Password</div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center">
                                    <input onClick={handleAccepted} type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="text-white ml-2 text-lg">Accept our all <Link className='link-hover font-bold text-[#ff2222] text-xl' to={'/terms_conditions'}>terms and conditions</Link></span>
                                </label>
                            </div>
                            <div className='text-center text-red-500 text-xl font-semibold my-2'>
                                {
                                    errorMessage && errorMessage
                                }
                            </div>
                            <div className="form-control py-2">
                                <input disabled={!accepted} name="submit" className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <hr />
                        <div className='my-2'>
                            <h1 className="text-white text-lg font-semibold text-center py-1">Or you can also sign up with: </h1>
                            <GoogleLogIn></GoogleLogIn>
                        </div>
                        <hr />
                        <h1 className="text-white text-center text-xl font-semibold pt-3 pb-4">If you already have an ID, plz <Link to={'/login'} className="link-hover text-[#ff2222] font-extrabold">Log In</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;