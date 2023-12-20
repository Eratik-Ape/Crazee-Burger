import { styled } from 'styled-components';
import { theme } from "../../../theme";
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx"

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true)

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`