import React , {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomBtn from '../custom-buttom/custom-buttom.component';
import { useDispatch } from 'react-redux';

import { googleSignInStart } from '../../redux/user/user.action';
import { emailSignInStart } from '../../redux/user/user.action';

const SignIn = () => {
  const dispatch = useDispatch();
  const [userCredentials , setUserCredentials] = useState({
    email: '',
    password: '',
  })
  
  const {email , password } = userCredentials;
  
  const handleSubmit =  event => {
    event.preventDefault();
    
    dispatch(emailSignInStart(email , password));
    setUserCredentials({ email: '', password: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ [name]: value })

  };
  
  return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>sign in with your Email and Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="email"
            value={email}
            handleChange={handleChange}
            name="email"
            type="text"
            required
          />
          <FormInput
            label="password"
            value={password}
            handleChange={handleChange}
            name="password"
            type="password"
            required
          />
          <CustomBtn type="submit">sign in</CustomBtn>
          <CustomBtn type="button" onClick={() => dispatch(googleSignInStart())}>sign in with google</CustomBtn>
        </form>
      </div>
  )
}



export default SignIn;