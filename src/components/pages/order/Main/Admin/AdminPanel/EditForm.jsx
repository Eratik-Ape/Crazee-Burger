import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from './EditInfoMessage';
import Form from "./Form";

export default function EditForm() {
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)

  const handleChange = (e) => { 
    const { name, value } = e.target

    const productBeingEdited = {
      ...productSelected,
      [name]: value,
    }

    setProductSelected(productBeingEdited)
    handleEdit(productBeingEdited, username)
   }

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  )
}