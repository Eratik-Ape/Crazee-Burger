<<<<<<< HEAD
import styled from "styled-components"

export default function Product({ title, imageSource, price }) {
  return (
    <ProduitStyled className="produit">
=======
export default function Product({ title, imageSource, price }) {
  return (
    <div className="produit">
>>>>>>> 72d74a600858b08739bf40751df84ba6c228d5a7
    <div className="image">
      <img src={imageSource} alt={title} />
    </div>
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
<<<<<<< HEAD
  </ProduitStyled>
  )
}

const ProduitStyled = styled.div`
      background: red;
      width: 240px;
      height: 330px;

    .image {
      border: 1px solid fuchsia;
      width: 100px;
      height: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .description {
      border: 1px solid fuchsia;
    }
`
=======
  </div>
  )
}
>>>>>>> 72d74a600858b08739bf40751df84ba6c228d5a7
