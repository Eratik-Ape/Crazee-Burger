import { styled } from 'styled-components';
import { theme } from "../../../theme";
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx"
import { fakeMenu } from '../../../fakeData/fakeMenu.jsx';
import { EMPTY_PRODUCT } from './../../../enums/products';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("edit")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState({EMPTY_PRODUCT})
  
  const handleAdd = (newProduct) => { 
    const menuCopy = JSON.parse(JSON.stringify(menu))
    const menuUpdated = [newProduct, ...menuCopy]
    setMenu(menuUpdated) 
   }

   const handleDelete = (idToDelete) => { 
    const menuCopy = JSON.parse(JSON.stringify(menu))
    const menuUpdated = menuCopy.filter((product) => product.id === idToDelete)
    setMenu(menuUpdated)
   }

   const handleEdit = (productBeingEdited) => { 
    const menuCopy = JSON.parse(JSON.stringify(menu))
    const indexOfProductToEdit = menu.findIndex((product) => product.id === productBeingEdited.id)
    menuCopy[indexOfProductToEdit] = productBeingEdited
    setMenu(menuCopy)
   }

   const resetMenu = () => {
    setMenu(fakeMenu.SMALL)
  }

  const orderContextValue = {
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
    setProductSelected
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