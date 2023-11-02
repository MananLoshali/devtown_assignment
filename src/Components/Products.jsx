import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 550px;
  border: 1px solid red;
  background-color: #b38bd9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  padding: 30px 0px;
  border: 1px solid green;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const Info = styled.span`
  font-size: 1.1rem;
  color: white;
  font-weight: bold;
  width: 45%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: white;
  font-weight: 500;
  padding: 25px;
`;

const Img = styled.div`
  width: 100%;
  object-fit: cover;
`;

const Products = ({ item }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={item.image} />
        <Title> {item.title}</Title>
        <Desc>{item.desc.about}</Desc>
      </ImageWrapper>
      <InfoContainer>
        <Info> Duration: {item.desc.duration}</Info>
        <Info>Price: {item.price}</Info>
        <Info>Total Videos :{item.desc.totalVideos}</Info>
        <Info>Category: {item.category}</Info>
        <Info>Difficulty: {item.desc.difficulty}</Info>
      </InfoContainer>
    </Container>
  );
};

export default Products;
