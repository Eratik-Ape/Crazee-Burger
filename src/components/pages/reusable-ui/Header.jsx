import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Header({children}) {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  background: ${theme.colors.background_dark};
  height: 70px;
  padding: 0 16px;
`;