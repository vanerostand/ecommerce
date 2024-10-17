import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Review from "../Review/Review";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 1em auto;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  h3 {
    font-size: 2em;
    margin: 0.5em 0;
  }
  p {
    font-size: 1em;
    font-weight: bold;
    margin: 0.5em 0;
  }
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 1em auto;
  flex-grow: 0.1;
  h3 {
    font-size: 1.2em;
    margin: 0.5em 0;
  }
`;

const ButtonOrange = styled.button`
  padding: 0.5em;
  margin: 1em 0;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background-color: #0b2c4d;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  li {
    margin: 0.5em 0;
    img {
      width: 50%;
      height: 50%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  margin: 1em auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
`;

const DefaultImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const TableSpecifications = styled.table`
  width: 90%;
  border-collapse: collapse;
  th {
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 0.5em;
    width: 30%;
  }
  td {
    border: 1px solid #ccc;
    padding: 0.5em;
    width: 30%;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const { isError, isLoading, data: productDetails } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5500/products/${id}`);
      return await response.json();
    },
  });

  const selectImage = (imageUrl) => {
    setImage(imageUrl);
  };

  useEffect(() => {
    if (productDetails && productDetails.images.length > 0) {
      setImage(productDetails.images[0].url);
    }
  }, [productDetails]);

  return (
    <>
    <h1>Product Details</h1>
      {isError && <p> Error</p>}
      {isLoading && <p>Loading...</p>}
      <Container>
        <LeftPanel>
          <List>
            {productDetails &&
              productDetails.images.map((image) => (
                <li key={image.id}>
                  <img
                    src={image.url}
                    onMouseEnter={() => selectImage(image.url)}
                    alt=""
                  />
                </li>
              ))}
          </List>
            <DefaultImage src={image} alt="" />
        </LeftPanel>
        <ContainerDetail>
          {productDetails && (
            <div>
              <h3>{productDetails.name}</h3>
              <p>{productDetails.description}</p>
              <h3>$ {productDetails.price}</h3>
              <p>Discount: {productDetails.discount} %</p>
              <p>
                Final Price: ${" "}
                {productDetails.price - (productDetails.price * productDetails.discount) / 100}
              </p>
              <p>Stock: {productDetails.stock}</p>
            </div>
          )}
        </ContainerDetail>
        <SidePanel>
          <ButtonOrange>Add to Cart</ButtonOrange>
          <ButtonOrange>Buy Now</ButtonOrange>
          <hr />
          <ButtonOrange >Add to Wishlist</ButtonOrange>
        </SidePanel>
        <TableSpecifications>
          <thead>
            <tr>
              <th>Specification</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {productDetails &&
              productDetails.specifications.map((spec) => (
                <tr key={spec.id}>
                  <td>{spec.name}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
          </tbody>
        </TableSpecifications>
        {productDetails && <Review productId={productDetails.id} />}
      </Container>
    </> 
  );

  
}

export default ProductDetails;