import { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { useSuccessMessage } from '../../../../../../../hooks/useSuccessMessage';
import Form from "../Form/Form";
import EditInfoMessage from './EditInfoMessage';
import SavingMessage from "./SavingMessage";

export default function EditForm() {
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)

  const [valueOnFocus, setValueOnFocus] = useState()
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

  const handleChange = (e) => { 
    const { name, value } = e.target

    const productBeingEdited = {
      ...productSelected,
      [name]: value,
    }

    setProductSelected(productBeingEdited)
    handleEdit(productBeingEdited, username)
   }

   const handleOnFocus = (event) => { 
    const valueOnFocus = event.target.value
    setValueOnFocus(valueOnFocus)
    }

  const handleOnBlur = (event) => { 
    const valueOnBlur = event.target.value
    if(valueOnFocus !== valueOnBlur) {
      displaySuccessMessage()
    }
  }

  return (
    <Form product={productSelected} onChange={handleChange} onFocus={handleOnFocus} onBlur={handleOnBlur} ref={titleEditRef}>
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  )
}