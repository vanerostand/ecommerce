import React, { useContext, useEffect } from "react"
import styled from "styled-components";
import { ProductContext } from "../../App";
import { useQuery} from "@tanstack/react-query";
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
  const productContext = useContext(ProductContext);
 
  const { isError, isLoadind, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5500/products');
      return (await response.json());
  }
  })

  useEffect(() => {
    if (products) {
      productContext.setProducts(products);
    }
  }, [products]);

  return (
    <>
    <h1>Products</h1>
      {isError && <p>Error</p>}
      {isLoadind && <p>Loading...</p>}
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