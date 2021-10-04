import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomBtn from '../custom-buttom/custom-buttom.component';

export default class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>Sign In</h2>
        <span>hello</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            type="text"
            required
          />
          <FormInput
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            type="password"
            required
          />
          <CustomBtn type="submit">sign in</CustomBtn>
        </form>
      </div>
    );
  }
}
