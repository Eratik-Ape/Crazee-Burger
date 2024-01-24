import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { isEmpty } from "../../../../../utils/array";
import BasketProducts from "./BasketProducts";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import Total from "./Total";

export default function Basket() {
  const {basket} = useContext(OrderContext)

  return (
    <BasketStyled>
      <Total />
      {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`
