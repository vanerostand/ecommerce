import React from "react";
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;  

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 2px;
  background-color: #f9f9f9;
`;

const LoginButton = styled.button`
  padding: 0.5rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  &:focus {
    border-bottom: 1px solid blue;
  }
  background-color: #f9f9f9;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
  cursor: pointer;
  align-self: flex-end;
`;

const Login = () => {
  return (
    <div>
      <LoginContainer>
        <LoginForm> 
          <h2>Welcome back!</h2>
          <h3>Log in to your account</h3>

          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password"/>
          <LoginButton>Login</LoginButton>
          <Link href="#">Forgot password?</Link>

          <p>Don't have an account? <Link href="#">Sign up</Link></p>
        </LoginForm>
      </LoginContainer>
    </div>
  );
}

export default Login;