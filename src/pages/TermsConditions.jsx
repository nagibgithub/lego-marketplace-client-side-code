import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useLocation} from 'react-router-dom';
import pageTitle from '../hooks/pageTitle';

const TermsConditions = () => {

    pageTitle('Lego Store | Terms and Conditions');

    const locationHistory = useLocation()
    console.log(locationHistory);

    const historyBack = () => {
        history.back()
    }



    return (
        <div className='lg:container px-6 py-3 mb-5 border-2 rounded-lg mt-5 border-gray-400 w-max mx-auto shadow-lg'>
            <div className='flex justify-evenly'>
                <button className='btn-n' onClick={() => historyBack()}> <span><FontAwesomeIcon icon={faArrowLeft} /></span> <span className='pl-3'> Go to Previous Page</span></button>
                <Link to={'/'}><button className='btn-n'>Go to Home Page</button></Link>
            </div>
            <div className='lg:container whitespace-normal mx-auto text-sm font-semibold'>
                <br />
                <h1>Terms and Conditions</h1>

                <h1>Welcome to Nagib Lego Store the Website. By accessing or using the Website, you agree to be bound by these Terms and Conditions Terms.</h1>

                <h1>Website Use and User Information</h1>
                <h1>1.1. The Website is owned and operated by [Your Company Name], located at [Your Company Address].</h1>
                <h1>1.2. The Website is intended for use by individuals over the age of 13. If you are under the age of 13, you may not use the Website.</h1>
                <h1>1.3. In order to use certain features of the Website, you may be required to provide personal information such as your name, email address, username, and user photo. By providing this information, you agree to our Privacy Policy.</h1>
                <h1>1.4. We may use digital analytics software to track usage of the Website for performance optimization and improvement purposes.</h1>
                <h1>1.5. We do not display advertisements on the Website, but we may use retargeting for advertising purposes.</h1>
                <h1>1.6. We may use Google Maps APIs, Cookies, Local Storage, and sessions to improve your experience on the Website.</h1>
                <h1>1.7. We use Firebase Auth Provider to allow users to sign in to the Website using their Google, GitHub, or Facebook accounts.</h1>

                <h1>User Communications</h1>
                <h1>2.1. If you need to contact us, you can do so by email at nmfuad.bd2010@gmail.com, by phone at +8801819194110, or by visiting our About page at <Link className='text-blue-600 underline' to={'https://nagib-toy.web.app/about'}>https://nagib-toy.web.app/about</Link>.</h1>
                <h1>2.2. We may send emails or newsletters to users who have provided us with their email address. You can unsubscribe from these communications at any time.</h1>

                <h1>Payment and Transactions</h1>
                <h1>3.1. The Website does not accept payments online.</h1>

                <h1>Intellectual Property Rights</h1>
                <h1>4.1. The Website and its content, including but not limited to text, graphics, images, logos, and software, are the property of Nagib Lego Store or its licensors and are protected by copyright, trademark, and other intellectual property laws.</h1>
                <h1>4.2. You may not use, reproduce, modify, or distribute any content from the Website without our prior written consent.</h1>

                <h1>Disclaimer of Warranties and Limitation of Liability</h1>
                <h1>5.1. The Website is provided on an as is and as available basis. We do not make any warranties, express or implied, regarding the Website or its content.</h1>
                <h1>5.2. We will not be liable for any damages of any kind arising from the use of the Website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</h1>

                <h1>Indemnification</h1>
                <h1>6.1. You agree to indemnify, defend, and hold harmless [Your Company Name], its officers, directors, employees, and agents from any and all claims, damages, and expenses including reasonable attorneys fees arising out of or related to your use of the Website.</h1>

                <h1>Governing Law and Jurisdiction</h1>
                <h1>7.1. These Terms shall be governed by and construed in accordance with the laws of [Your Country or State]. Any dispute arising out of or in connection with these Terms shall be resolved by the courts of [Your Country or State].</h1>

                <h1>Changes to Terms</h1>
                <h1>8.1. We may modify these Terms at any time by posting the revised Terms on the Website. Your continued use of the Website after the posting of the revised Terms</h1>
                <div className='text-center whitespace-normal container text-sm lg:text-xl font-bold text-blue-900 px-6 py-3 mb-5 border-2 rounded-lg mt-5 border-gray-400 w-full mx-auto shadow-lg'>accept our Terms and Conditions?
                    <div className='flex justify-evenly w-full'>
                        <button className='btn-n' onClick={() => historyBack()}> <span><FontAwesomeIcon icon={faArrowLeft} /></span> <span className='pl-3'> Go to Previous Page</span></button>
                        <Link to={'/'}><button className='btn-n'>Go to Home Page</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TermsConditions;