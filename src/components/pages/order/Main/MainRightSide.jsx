import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import { adminAnimation } from "../../../../theme/animations";
import Admin from './Admin/Admin';
import Menu from './Menu/Menu';

export default function MainRightSide() {
  const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && (
        <TransitionGroup className="transition-group">
          <CSSTransition appear classNames="admin" timeout={500}>
            <Admin />
          </CSSTransition>
        </TransitionGroup>
      )}
    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${adminAnimation}
`
