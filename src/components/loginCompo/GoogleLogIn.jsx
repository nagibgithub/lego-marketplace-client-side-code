import {useContext} from 'react';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const GoogleLogIn = () => {

    const {auth} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    // console.log(from);

    const googleLoginHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const logUserEmail = {email: user.email};

                fetch('https://b7a11-nagib-lego-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: { 'content-type': 'application.json' },
                    body: JSON.stringify(logUserEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem("lego-token", data.token)
                    })


                console.log(user, token);
                // console.log(user);
                // console.log(token);
                navigate(from, {replace: true});
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, credential);
            });
    }

    return (
        <button onClick={googleLoginHandler} className="google-signin-button">
            <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
            <h1 className="pl-2 text-lg">Log in with Google</h1>
        </button>
    );
};

export default GoogleLogIn;