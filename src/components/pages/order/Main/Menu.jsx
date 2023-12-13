import { useState } from "react";
import styled from "styled-components";
import { fakeMenu1 } from "../../../../fakeData/fakeMenu";

export default function Menu() {

  const [products, setProducts] = useState(fakeMenu1)

  return (
    <MenuStyles className="menu">Menu</MenuStyles>
  )
}

const MenuStyles = styled.div`
    background: purple;
`