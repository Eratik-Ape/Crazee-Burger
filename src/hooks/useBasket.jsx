import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"
import { deepClone, find, findIndex } from './../utils/array'

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.SMALL)

    const handleAddToBasket = (productToAdd) => { 
       const basketCopy = deepClone(basket)
       const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined

       if(!isProductAlreadyInBasket) {
        const newBasketProduct = {
         ...productToAdd,
         quantity: 1,
       };
       const basketUpdated = [newBasketProduct, ...basketCopy]
       setBasket(basketUpdated)
       return
       }

        incrementProductAlreadyInBasket(productToAdd, basketCopy, setBasket);
      }

      const incrementProductAlreadyInBasket = (productToAdd, basketCopy, setBasket) => {
        const indexOfBasketProductToIncrement = findIndex(productToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
     }

    return {basket, handleAddToBasket}
 }

