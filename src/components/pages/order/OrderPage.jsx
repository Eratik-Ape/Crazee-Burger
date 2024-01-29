import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from 'styled-components';
import { getMenu } from "../../../api/product.jsx";
import OrderContext from "../../../context/OrderContext.jsx";
import { useBasket } from '../../../hooks/useBasket.jsx';
import { theme } from "../../../theme";
import { findObjectById } from "../../../utils/array.jsx";
import { getLocalStorage } from "../../../utils/window.jsx";
import { EMPTY_PRODUCT } from './../../../enums/products';
import { useMenu } from './../../../hooks/useMenu';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  const {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
  const {basket, setBasket, handleAddToBasket, handleDeleteBasketProduct} = useBasket()
  const { username } = useParams()

  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu)
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  const initializeMenu = async () => {
    const menuReceived = await getMenu(username)
    setMenu(menuReceived)
  }

  const initializeBasket = () => { 
    const basketReceived = getLocalStorage(username)
    if(basketReceived) setBasket(basketReceived)
   }

  useEffect(() => {
    initializeMenu()
  }, [])
  
  useEffect(() => {
    initializeBasket()
  }, [])

  const orderContextValue = {
    username,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected, 
    setCurrentTabSelected,
    menu,
    resetMenu,
    handleAdd,
    handleDelete,
    handleEdit,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected
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