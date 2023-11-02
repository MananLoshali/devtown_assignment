import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  border: 2px solid #d2eff9;
  background-color: #d2eff8;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  flex: 1;
`;

const Text1 = styled.p`
  color: blueviolet;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;

const Text = styled.button`
  max-width: max-content;
  padding: 10px;
  border-radius: 10px;
  color: #333131;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.6s ease-in;
  border: none;
  background-color: #d2eff8;

  &:hover {
    background-color: #a8eae7;
  }
  &:active {
    background-color: #438e8d;
    font-size: 1.4rem;
  }
`;

const TextActive = styled.button`
  max-width: max-content;
  padding: 10px;
  border-radius: 10px;
  color: #333131;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  background-color: #a8eae7;
  border: none;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Navbar = ({ type }) => {
  console.log(type);
  return (
    <Container>
      <Box1>
        <Link to="/">
          <Text1>DevTown</Text1>
        </Link>
      </Box1>
      <Wrapper>
        <Box>
          {type === "active" ? (
            <TextActive>Courses</TextActive>
          ) : (
            <Text>
              <Link to="/products">Courses</Link>
            </Text>
          )}
        </Box>
        <Box>
          <Text>Features</Text>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
