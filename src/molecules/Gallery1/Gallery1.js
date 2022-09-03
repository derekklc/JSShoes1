import * as S from "./Gallery1.styles";

const productsList = [
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
  "nike",
];

const renderImages = () => {
  return productsList.map((item) => <S.ImageDiv />);
};

const Gallery1 = () => {
  return <S.ProductContainer>{renderImages()}</S.ProductContainer>;
};

export default Gallery1;
