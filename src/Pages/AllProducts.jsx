import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Sort from "../Components/Sort";

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;

const AllProducts = () => {
  return (
    <Container>
      <Navbar type="active" />
      <Sort />
    </Container>
  );
};

export default AllProducts;
