import React , {useState}from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-buttom/custom-buttom.component';
import { signUpStart } from '../../redux/user/user.action';
import { useDispatch } from 'react-redux';




const SignUp = () => {
 const dispatch = useDispatch();
 const [userCredentials , setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = userCredentials;


  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('password doesnt match');
      return;
    }

    dispatch(signUpStart({email, password, displayName}))

  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({...userCredentials , [name] : value})
  };
  return (
      <div className="sign-up">
        <h2>sign up</h2>
        <span>sign in with your Email and Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="name"
            name="displayName"
            value={displayName}
            required
            type="text"
            handleChange={handleChange}
          />
          <FormInput
            label="email"
            name="email"
            value={email}
            required
            type="text"
            handleChange={handleChange}
          />
          <FormInput
            label="password"
            name="password"
            value={password}
            required
            type="password"
            handleChange={handleChange}
          />
          <FormInput
            label="confirm password"
            name="confirmPassword"
            value={confirmPassword}
            required
            type="password"
            handleChange={handleChange}
          />
          <CustomBtn type="submit">sign up</CustomBtn>
        </form>
      </div>
  );
}

export default SignUp;
