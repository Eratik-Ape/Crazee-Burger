import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from 'styled-components'
import OrderContext from "../../../../../context/OrderContext"
import { IMAGE_COMING_SOON } from '../../../../../enums/products'
import { findObjectById } from '../../../../../utils/array'
import { checkIfProductIsClicked } from '../Menu/helper'
import BasketCard from './BasketCard'

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
                  className={"card"} />
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

  .animation-basket-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active {
    .card {
      transform: translateX(0px);
      opacity: 100%;
      transition: 0.5s;
    }
  }

  .animation-basket-enter {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-enter-active {
    .card {
      transform: translateX(0px);
      opacity: 100%;
      transition: 0.5s;
    }
  }

  .animation-basket-exit {
    .card {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .card {
      transform: translateX(-100px);
      opacity: 0%;
      transition: 0.5s;
    }
  }

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
`