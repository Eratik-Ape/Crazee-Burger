import { styled } from 'styled-components';
import { theme } from "../../../theme";
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx"
import { fakeMenu } from '../../../fakeData/fakeMenu.jsx';
import { EMPTY_PRODUCT } from './Main/Admin/AdminPanel/AddForm.jsx';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("edit")
  const [products, setProducts] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  
  const handleAdd = (newProduct) => { 
    const menuCopy = [...products]
    const menuUpdated = [newProduct, ...menuCopy]
    setProducts(menuUpdated) 
   }

   const handleDelete = (idToDelete) => { 
    const menuCopy = [...products]
    const menuUpdated = menuCopy.filter((product) => product.id !== idToDelete)
    setProducts(menuUpdated)
   }

   const resetMenu = () => {
    setProducts(fakeMenu.SMALL)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected, 
    setCurrentTabSelected,
    products,
    resetMenu,
    handleAdd,
    handleDelete,
    newProduct,
    setNewProduct
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