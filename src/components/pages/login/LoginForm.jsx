import React, { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authenticateUser } from '../../../api/user';
import { theme } from '../../../theme';
import TextInput from '../reusable-ui/TextInput';
import Button from './../reusable-ui/Button';

export default function LoginForm() {

    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => { 
        e.preventDefault()
        authenticateUser(username)
        setUsername("")
        navigate(`order/${username}`)
     }

     const handleChange = (e) => { 
        setUsername(e.target.value)
      }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput value={username}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle />}
        className="input-login"
        version="normal"
        />
        
        <Button
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward />} /> 
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginBar};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0;
  }
`