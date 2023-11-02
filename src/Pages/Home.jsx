import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import ProductList from "../Components/ProductList";
import { data } from "../data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Products from "../Components/Products";

const Container = styled.div`
  overflow-x: hidden;
`;

const Button = styled.button`
  max-width: 20%;
  max-height: max-content;
  padding: 10px 20px;
  border: none;
  background-color: #50e6e6;
  color: #b3239d;
  font-weight: 600;
  margin: 30px 45%;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 3px 4px #2dafaf;
  transition: 0.6s;
  &:active {
    box-shadow: none;
  }
`;

const Home = () => {
  let products = data.filter((item) => item.category === "Live Mentor Led");

  return (
    <Container>
      <Navbar />
      <About />
      <ProductList data={products} />
      <Button>
        <Link to="/products" style={{ border: "none" }}>
          Show More
        </Link>
      </Button>
    </Container>
  );
};

export default Home;
