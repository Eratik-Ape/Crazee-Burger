import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from './../../../../theme/index';

export default function Menu() {

  const [products, setProducts] = useState(fakeMenu2)

  return (
    <MenuStyles className="menu">
      {products.map((p) => {
        return (
        <div className="produit">
          <div className="image">
            <img src={p.imageSource} alt={p.title} />
          </div>
          <div className="info-text">
            <div className="title">{p.title}</div>
            <div className="description">
            <div className="price">{p.price}</div>
            <button className="add-button">Ajouter</button>
            </div>
          </div>
        </div>
        )
      })}
      </MenuStyles>
  )
}

const MenuStyles = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    .produit {
      background: red;
      width: 240px;
      height: 330px;

    .image {
      border: 1px solid fuchsia;
      width: 100px;
      height: auto;
      img {
        width: 100%;
        h100%
      }
    }
  }
`