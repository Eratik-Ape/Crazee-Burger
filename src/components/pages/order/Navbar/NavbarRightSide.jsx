import { Link } from "react-router-dom";
import { styled } from 'styled-components';
import Profile from "./Profile";
import ToggleButton from "../../reusable-ui/ToggleButton";

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled>
    {/* <div className="admin-button">Admin button</div> */}
    <ToggleButton
      labelIfUnchecked="Activer le mode admin"
      labelIfChecked="Désactiver le mode admin" />
    <Profile username={username} />
   </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`