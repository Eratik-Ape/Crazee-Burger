import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { menuAnimation } from "../../../../../theme/animations";
import { theme } from '../../../../../theme/index';
import { isEmpty } from "../../../../../utils/array";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON, IMAGE_NO_STOCK } from './../../../../../enums/products';
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from './EmptyMenuClient';
import Loader from './Loader';
import { checkIfProductIsClicked } from "./helper";

export default function Menu() {

  const { 
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected
   } = useContext(OrderContext)
  
  const handleCardDelete = (event, idProductToDelete) => { 
    event.stopPropagation()
    handleDelete(idProductToDelete, username)
    handleDeleteBasketProduct(idProductToDelete, username)
    idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
  }
  
  const handleAddButton = (event, idProductToAdd) => { 
    event.stopPropagation()
    handleAddToBasket(idProductToAdd, username)
  }

  if(menu === undefined) return <Loader />
  
  if(isEmpty(menu)) {
    if(!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
  }

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(({id, title, imageSource, price}) => {
        return (
        <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
          <Card
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={isModeAdmin ? () => handleProductSelected(id) : null}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
            onAdd={(event) => handleAddButton(event, id)}
            overlapImageSource={IMAGE_NO_STOCK} />
        </CSSTransition>
        )
      })}
      </TransitionGroup>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${menuAnimation}
`