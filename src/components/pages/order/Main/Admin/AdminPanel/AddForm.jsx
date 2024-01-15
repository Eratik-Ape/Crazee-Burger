import { useContext, useState } from "react"
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";
import Form from './Form';
import Button from "../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)

    displaySuccessMessage()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const displaySuccessMessage = () => { 
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000);
   }

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </>
    </Form>
  )
}