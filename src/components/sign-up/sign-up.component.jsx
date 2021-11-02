import React from "react";
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomBtn from "../custom-buttom/custom-buttom.component";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createUserProfileDocument } from "../../assets/firebase/firebase.utils";
class SignUp extends React.Component {
  constructor (){
      super();

      this.state = {
          displayName : '' , 
          email : '' ,
          password : '' ,
          confirmPassword : ''
      }
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    const {displayName , email , password , confirmPassword } = this.state;

    if(password !== confirmPassword) {
        alert('password doesnt match')
        return;
    }
    
    const auth = getAuth();
    try{
      const {user} = await createUserWithEmailAndPassword(auth, email, password)

      await createUserProfileDocument(user , {displayName})

      this.setState({
        displayName : '' , 
        email : '' ,
        password : '' ,
        confirmPassword : ''
    })
    } catch(err) {
      console.log(err)
    }


  }
   
  handleChange = event => {
      const {name , value} = event.target

      this.setState({[name] : value})
  }
  render(){
    const {displayName , email , password , confirmPassword } = this.state;
      return(
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
      )
  }
}

export default SignUp;