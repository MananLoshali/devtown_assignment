import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Products from "./Products";

const Container = styled.div`
  width: 100vw;
  height: max-content;
  background-color: #f4b5f4;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0px;
`;

const ProductList = ({ data }) => {
  return (
    <Container>
      {data.map((item) => (
        <Products item={item} />
      ))}
    </Container>
  );
};

export default ProductList;
