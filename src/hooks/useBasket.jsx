import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"
import { deepClone, findIndexById, findObjectById, removeObjectById } from './../utils/array'

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (productToAdd) => { 
       const basketCopy = deepClone(basket)
       const isProductAlreadyInBasket = findObjectById(productToAdd.id, basketCopy) !== undefined

       if(!isProductAlreadyInBasket) {
        createNewProductInBasket(productToAdd, basketCopy, setBasket)
       return
       }

        incrementProductAlreadyInBasket(productToAdd, basketCopy);
      }

    const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = findIndexById(productToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
     }

    const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
       const newBasketProduct = {
         ...productToAdd,
         quantity: 1,
       }
    const basketUpdated = [newBasketProduct, ...basketCopy]
       setBasket(basketUpdated)
     }

    const handleDeleteBasketProduct = (idBasketProduct) => {
      const basketCopy = deepClone(basket)
      const basketUpdated = removeObjectById(idBasketProduct, basketCopy)
      setBasket(basketUpdated)
    }

    return {basket, handleAddToBasket, handleDeleteBasketProduct}
 }


