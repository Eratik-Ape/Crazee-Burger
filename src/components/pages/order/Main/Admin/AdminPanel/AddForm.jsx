import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from './../../../../reusable-ui/TextInput';
import Button from './../../../../reusable-ui/Button';
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";

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

   const inputTexts = getInputTextsConfig(newProduct)

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput key={input.id} {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button className="submit-button" label={"Ajouter un nouveau produit au menu"} version="success" />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      height: 100%;
    }
  }
`