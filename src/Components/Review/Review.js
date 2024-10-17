import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: justify;
  justify-content: justify;
  text-align: justify;
  width: 90%;
  h3 {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
`;

const ReviewCard = styled.div`
  flex-direction: column;
  align-items: justify;
  justify-content: justify;
  text-align: justify;
  border-top: 1px solid #ccc;
  width: 100%;
  p {
    font-size: 1em;
    margin: 0.5em 0;
  }
`;

const ImageUser = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const ReviewText = styled.p`
  color: #555;
  font-size: 1em;
  line-height: 1.5;
`;

const ReviewAuthor = styled.p`
  color: #777;
  font-size: 0.9em;
  font-style: italic;
  margin-top: 10px;
`;

const Review = ({productId}) => {
  const { isError, isLoading, data: reviews } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5500/reviews?productId=${productId}`);
      return await response.json();
    },
  });

  const { data: usersData } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5500/users`);
      return await response.json();
    },
  });

  const getUserById = (userId) => {
    return usersData.find((user) => user.id === userId) || null;
  };
  
  const getUserName = (userId) => {
    const user = getUserById(userId);
    return user ? user.name : 'Anonymous';
  };
  
  const getUserImage = (userId) => {
    const user = getUserById(userId);
    return user ? user.image : '';
  };

  return (
    <div>
      {isError && <p> Error</p>}
      {isLoading && <p>Loading...</p>}
      
      <ReviewContainer>
          <h3>Reviews</h3>
          {reviews &&
            reviews.map((reviewData) => (
              <ReviewCard key={reviewData.id}>
                <ReviewAuthor><ImageUser src={getUserImage(reviewData.userId)} /> {getUserName(reviewData.userId)}</ReviewAuthor>
                <ReviewText>{reviewData.comment}</ReviewText>
                <ReviewText>{reviewData.rate}</ReviewText>
              </ReviewCard>
            ))}
        </ReviewContainer>
    </div>
  );
}

export default Review;