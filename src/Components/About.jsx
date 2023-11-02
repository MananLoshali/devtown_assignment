import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  max-height: max-content;
  padding: 35px 30px;
  background-color: #6422cd;
  margin: auto;
  border-radius: 10px;
  opacity: 0.9;
  margin-bottom: 40px;
  box-shadow: 3px 5px #321168;
`;

const Heading = styled.p`
  font-size: 2.5rem;
  font-weight: bolder;
  font-family: "Poppins, sans-serif";
  letter-spacing: 2px;
  color: white;
  margin-bottom: 3rem;
`;
const Para = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const Paras = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 2rem;
`;

const About = () => {
  return (
    <Container>
      <Heading>Crack MNC's With Our Training and Internship Programs</Heading>
      <Para>Build. Internship & Industrial-grade tech projects</Para>
      <Para>Learn. Full Stack or Data Science hands-on</Para>
      <Para>Grow. your career with real work experience</Para>
      <Paras>
        Recruiters too, look for real-project experience when hiring developers
        and here at DevTown, we strive to provide just that. We empower
        developers with high quality applied learning opportunities and build
        skills that translate into career growth and success.
      </Paras>
    </Container>
  );
};

export default About;
