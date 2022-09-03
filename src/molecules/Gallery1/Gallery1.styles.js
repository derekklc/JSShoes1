import styled from "@emotion/styled";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;

export const ImageDiv = styled.div`
  height: 150px;
  width: 100%;
  background-position: center;
  background-image: url(./NikeLogo.jpeg);
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: transform 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;
