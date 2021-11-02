import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomBtn from '../custom-buttom/custom-buttom.component';
import { signInWithGoogle } from '../../assets/firebase/firebase.utils';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const auth = getAuth();
    
    const {email , password } = this.state
    try{
    await signInWithEmailAndPassword(auth, email, password)
    this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err)
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>sign in with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            name="email"
            type="text"
            required
          />
          <FormInput
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            name="password"
            type="password"
            required
          />
          <CustomBtn type="submit">sign in</CustomBtn>
          <CustomBtn onClick={signInWithGoogle}>sign in with google</CustomBtn>
        </form>
      </div>
    );
  }
}
