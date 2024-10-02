import React, { useContext, useState, useEffect} from "react";
import styled from 'styled-components';
import { useDebounce } from "../../Hooks/useDebounce";
import { ProductContext } from "../../App";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5em;
  width: 300px;
  border: 1px solid #000;
  border-radius: 5px;
`;

const SearchBar = () => {
  const productContext = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  const baseUrl = "http://localhost:5500";
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(baseUrl +'/products?q='+ debouncedSearchTerm);
        const json = await res.json();
        productContext.setProducts(json);
      };
      fetchData();
    }

    catch (error) {
      console.error(error);
    }
  }, [debouncedSearchTerm]);

  return (
    <SearchBarContainer>
      <SearchInput 
      type="text"
      placeholder="Search products..." 
      value={searchTerm}
      onChange={handleChange}/>
    </SearchBarContainer>
  )
};

export default SearchBar;