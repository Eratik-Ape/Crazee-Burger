import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from 'styled-components'
import OrderContext from "../../../../../../context/OrderContext.jsx"
import { BASKET_MESSAGE, IMAGE_COMING_SOON } from '../../../../../../enums/products.jsx'
import { basketAnimation } from '../../../../../../theme/animations.jsx'
import { findObjectById } from '../../../../../../utils/array.jsx'
import { checkIfProductIsClicked } from '../../Menu/helper.jsx'
import { formatPrice } from './../../../../../../utils/maths'
import { convertStringToBoolean } from './../../../../../../utils/string'
import BasketCard from './BasketCard.jsx'

export default function BasketProducts() {
  const {username, basket, isModeAdmin, handleDeleteBasketProduct, handleProductSelected, menu, productSelected} = useContext(OrderContext)

  const handleOnDelete = (event, id) => { 
    event.stopPropagation()
    handleDeleteBasketProduct(id, username)
   }

  return (
        <TransitionGroup component={BasketProductsStyled} className={"transition-group"}>
          {basket.map((basketProduct) => {
            const menuProduct = findObjectById(basketProduct.id, menu)
            return (
            <CSSTransition
              appear={true}
              classNames={"animation-basket"}
              key={basketProduct.id}
              timeout={300}>

              <div className="card-container">
                <BasketCard {...menuProduct}
                  imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON}
                  quantity={basketProduct.quantity}
                  isClickable={isModeAdmin}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
                  isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                  className={"card"}
                  price=
                    {convertStringToBoolean(menuProduct.isAvailable)
                      ? formatPrice(menuProduct.price)
                      : BASKET_MESSAGE.NOT_AVAILABLE} />
              </div>
            </CSSTransition>
          )
          })}
        </TransitionGroup>
  )
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  
  .card-container {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }

  ${basketAnimation}
  `