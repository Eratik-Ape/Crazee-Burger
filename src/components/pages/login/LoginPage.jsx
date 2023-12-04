import LoginForm from "./LoginForm"
import Logo from "../reusable-ui/Logo"
import styled from "styled-components"

export default function LoginPage() {

  return (
    <LoginPageStyled>  
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/burger-background.jpg") center/cover;
    mix-blend-mode: darken;
}
`