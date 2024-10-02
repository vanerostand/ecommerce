import React, { useContext, useEffect } from "react"
import styled from "styled-components";
import { useFetch } from "../../Hooks/useFetch";
import { ProductContext } from "../../App";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  margin: 0.5em 0.5em;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 0 10px #ccc;
  border-radius: 0.5em;
  max-width: 150px;
  background-color: #fff;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const Product = () => {
  const { data, error } = useFetch("/products");
  const productContext = useContext(ProductContext);
 
  useEffect(() => {
    if (data) {
      productContext.setProducts(data);
    }
  }, [data]);

  return (
    <>
    <h1>Products</h1>
      {error && <p>Error</p>}
      <CardContainer>
        {productContext.products &&
          productContext.products.map((product) => {
            return (
              <Card key={product.id} >
                  <h3>{product.name}</h3>
                  <img src={product.images[0].url} alt="" />
                  <p>Description: {product.description}</p>
                  <p>$ {product.price}</p>
              </Card>
            )
          })}
      </CardContainer>
      </>
  )
};

export default Product