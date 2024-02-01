import { getMenu } from "../../../../api/product"
import { getLocalStorage } from "../../../../utils/window"

const initializeMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username)
  setMenu(menuReceived)
}

const initializeBasket = (username, setBasket) => { 
  const basketReceived = getLocalStorage(username)
  if(basketReceived) setBasket(basketReceived)
 }

export const initializeUserSession = async (username, setMenu, setBasket) => { 
  await initializeMenu(username, setMenu)
  initializeBasket(username, setBasket)
}