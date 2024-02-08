import React from "react";
import styled from "styled-components";
import SelectInput from "../../../../reusable-ui/SelectInput";
import TextInput from '../../../../reusable-ui/TextInput';
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig, getSelectInputConfig } from "./inputConfig";

const Form = React.forwardRef(({product, onSubmit, onChange, onFocus, onBlur, children}, ref) => {

const inputTexts = getInputTextsConfig(product)
const inputSelects = getSelectInputConfig(product)
  
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
            {...input}
            key={input.id}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null} />
          ))}
          {inputSelects.map((inputSelect) => (
            <SelectInput {...inputSelect}
              key={inputSelect.id}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur} /> 
          ))}
        </div>
          <div className="form-footer">{children}</div>
      </FormStyled>
    )
  })

  export default Form
  
  const FormStyled = styled.form`
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
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 8px;
      grid-column-gap: 8px;

      .title {
        grid-area: 1 / 1 / 2 / 4;
      }
      .image-source {
        grid-area: 2 / 1 / 3 / 4;
      }
      .price {
        grid-area: 3 / 1 / 4 / 2;
      }
    }
  
    .form-footer {
      grid-area: 4 / -2 / -1 / -1;
      display: flex;
      align-items: center;
      position: relative;
      top: 3px;
  }
  `