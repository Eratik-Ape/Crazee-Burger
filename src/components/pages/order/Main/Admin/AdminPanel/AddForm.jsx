import { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";
import Form from './Form';
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const {isSubmitted, displaySuccessMessage} = useSuccessMessage()

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

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  )
}