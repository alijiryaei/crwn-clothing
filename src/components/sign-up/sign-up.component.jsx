import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-buttom/custom-buttom.component';
import { signUpStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('password doesnt match');
      return;
    }

    const { signUpStart } = this.props;
    signUpStart({email, password, displayName});

  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>sign up</h2>
        <span>sign in with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="name"
            name="displayName"
            value={displayName}
            required
            type="text"
            handleChange={this.handleChange}
          />
          <FormInput
            label="email"
            name="email"
            value={email}
            required
            type="text"
            handleChange={this.handleChange}
          />
          <FormInput
            label="password"
            name="password"
            value={password}
            required
            type="password"
            handleChange={this.handleChange}
          />
          <FormInput
            label="confirm password"
            name="confirmPassword"
            value={confirmPassword}
            required
            type="password"
            handleChange={this.handleChange}
          />
          <CustomBtn type="submit">sign up</CustomBtn>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userData =>
    dispatch(signUpStart(userData)),
});
export default connect(null, mapDispatchToProps)(SignUp);
