import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form"
import EditInfoMessage from './EditInfoMessage';

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)

  const handleChange = (e) => { 
    const { name, value } = e.target

    const productBeingEdited = {
      ...productSelected,
      [name]: value,
    }

    setProductSelected(productBeingEdited)
    handleEdit(productBeingEdited)
   }

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  )
}