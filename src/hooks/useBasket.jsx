import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"
import { deepClone, find } from './../utils/array';

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.SMALL)
    const handleAddToBasket = (productToAdd) => { 
       const basketCopy = deepClone(basket)
       const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined

       if(!isProductAlreadyInBasket) {
        const newBasketProduct = {
            ...productToAdd,
            quantity: 1,
        }

        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
       } else {
        const indexOfBasketProductToIncrement = basket.findIndex(
          (basketProduct) => basketProduct.id === productToAdd.id)
          basketCopy[indexOfBasketProductToIncrement].quantity +=1
       }
       setBasket(basketCopy)
     }

    return {basket, handleAddToBasket}
 }