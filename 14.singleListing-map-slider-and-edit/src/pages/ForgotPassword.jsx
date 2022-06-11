import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent');
    } catch (err) {
      toast.error('Could not send reset email');
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <h1 className="pageHeader">ForgotPassword</h1>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            className="emailInput"
            placeholder="Email"
            onChange={onChange}
            value={email}
          />
          <Link to={'/sign-in'} className="forgotPasswordLink">
            Sign In
          </Link>

          <div className="signInBar">
            <p className="signInText">Send Reset Link</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34" height="34" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default ForgotPassword;
