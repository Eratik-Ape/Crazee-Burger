import { useState } from "react"
import { syncBothMenus } from "../api/product"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"

export const useMenu = () => { 
    const [menu, setMenu] = useState(fakeMenu.LARGE)
  
    const handleAdd = (newProduct, username) => { 
      const menuCopy = deepClone(menu)
      const menuUpdated = [newProduct, ...menuCopy]
      setMenu(menuUpdated) 
      syncBothMenus(username, menuUpdated)
     }
  
     const handleDelete = (idToDelete, username) => { 
      const menuCopy = deepClone(menu)
      const menuUpdated = menuCopy.filter((product) => product.id !== idToDelete)
      setMenu(menuUpdated)
      syncBothMenus(username, menuUpdated)
     }
  
     const handleEdit = (productBeingEdited) => { 
      const menuCopy = deepClone(menu)
      const indexOfProductToEdit = menu.findIndex((product) => product.id === productBeingEdited.id)
      menuCopy[indexOfProductToEdit] = productBeingEdited
      setMenu(menuCopy)
     }
  
     const resetMenu = () => {
      setMenu(fakeMenu.MEDIUM)
    }

    return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
 }