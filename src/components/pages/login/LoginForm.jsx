import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
=======
import styled from 'styled-components'
import { IoChevronForward } from "react-icons/io5";
import TextInput from '../reusable-ui/TextInput';
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from './../reusable-ui/PrimaryButton';
import { theme } from '../../../theme';
>>>>>>> d51ec606499c141c118f1a53d2fe928b2d00f5ef

export default function LoginForm() {

    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => { 
        e.preventDefault
        setInputValue("")
        navigate(`order/${inputValue}`)
     }

     const handleChange = (e) => { 
        setInputValue(e.target.value)
      }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle className='icon' />}
        />
        
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className='icon' />} /> 
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

  .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.P0};
      margin-left: 10px;
    }
`