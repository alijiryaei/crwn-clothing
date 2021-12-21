import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomBtn from '../custom-buttom/custom-buttom.component';


import { googleSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import { emailSignInStart } from '../../redux/user/user.action';
class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }
  
  handleSubmit = async event => {
    const {emailSignInStart} = this.props
    event.preventDefault();
    
    const {email , password } = this.state
    try{
    emailSignInStart(email , password)
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
    const {googleSignInStart} = this.props
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
          <CustomBtn type="button" onClick={googleSignInStart}>sign in with google</CustomBtn>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart : (email , password) => dispatch(emailSignInStart({email , password}))
})

export default connect(null , mapDispatchToProps)(SignIn)