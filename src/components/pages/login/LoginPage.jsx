import LoginForm from "./LoginForm"
import styled from "styled-components";
import Logo from "../reusable-ui/Logo";


export default function LoginPage() {

  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;