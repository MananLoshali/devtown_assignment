import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import styled from "styled-components";
import { data } from "../data";

const Wrapper = styled.div`
  width: 100vw;
  background-color: whitesmoke;
  height: 15%;
  border: 1px solid gray;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const DropDown = styled.select`
  width: 20%;
  padding: 10px;
  max-height: max-content;
  border: 1px solid black;
`;
const Options = styled.option`
  width: 20%;
  max-height: max-content;
  font-size: 1rem;
`;

const Box = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0px 10px;
`;

const Wrapper1 = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const Button = styled.button`
  width: 20%;
  height: 30px;
  background-color: greenyellow;
  color: cadetblue;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  border-radius: 10px;

  &:disabled {
    background-color: gray;
  }
`;

const Sort = () => {
  const [startPage, setStartPage] = useState(0);
  const [lastPage, setLastPage] = useState(data.length / 4 - 1);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  const handlePreClick = () => {
    setStartPage(startPage === 0 ? 0 : startPage - 1);
    setStart(start > 0 ? start - 4 : 0);
    setEnd(end - 4);
  };

  const handleNextClick = () => {
    setStartPage(startPage < lastPage - 1 ? startPage + 1 : lastPage);
    setStart(start + 4);
    setEnd(end < data.length ? end + 4 : end);
  };

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [category, setCategory] = useState();
  const [categoryd, setCategoryd] = useState();
  const [sort, setSort] = useState();

  const [isCategory, setIsCategory] = useState(false);

  useEffect(() => {
    setProducts(data.slice(start, end));
  }, []);

  useEffect(() => {
    setProducts(data.slice(start, end));
  }, [start, end]);

  const handleFilter = (e) => {
    setCategory(e.target.value);
    setIsCategory(true);
  };

  const handleFilters = (e) => {
    setCategoryd(e.target.value);
    setIsCategory(true);
  };

  useEffect(() => {
    setFilteredProducts(products.filter((item) => item.category === category));
  }, [category]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) => item.desc.difficulty === categoryd)
    );
  }, [categoryd]);

  const handleSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  useEffect(() => {
    if (sort === "desc") {
      setFilteredProducts(products.sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(products.sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <>
      <Wrapper>
        <Box>
          <Text>Type: </Text>
          <DropDown name="category" onChange={handleFilter}>
            <Options disabled>Type:</Options>
            <Options>Live Mentor Led</Options>
            <Options>Indstrial Training Program</Options>
            <Options>Self-Paced Course</Options>
          </DropDown>
        </Box>

        <Box>
          <Text>Difficulty: </Text>
          <DropDown name="difficulty" onChange={handleFilters}>
            <Options disabled>Difficulty</Options>
            <Options>Beginner</Options>
            <Options>Intermidiate</Options>
            <Options>Advance</Options>
          </DropDown>
        </Box>

        <Box>
          <Text>Sort Products:</Text>
          <DropDown onChange={handleSort}>
            <Options value="asc">Price (asc)</Options>
            <Options value="desc">Price (desc)</Options>
          </DropDown>
        </Box>
      </Wrapper>

      {isCategory ? (
        <ProductList data={filteredProducts} />
      ) : (
        <ProductList data={products} />
      )}
      <Wrapper1>
        <Button
          onClick={handlePreClick}
          disabled={startPage === 0 ? true : false}
        >
          Pre
        </Button>
        <Text>
          {startPage} of {lastPage}
        </Text>

        <Button
          onClick={handleNextClick}
          disabled={startPage === data.length / 4 - 1 ? true : false}
        >
          Next
        </Button>
      </Wrapper1>
    </>
  );
};

export default Sort;
