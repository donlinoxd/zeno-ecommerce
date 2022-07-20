import {
  Container,
  Img,
  ImgWrapper,
  Price,
  ProductName,
  Wrapper,
} from "./ProductCard.styled";
import { Flex } from "../Flex/Flex.styled";
import { MdAddShoppingCart } from "react-icons/md";
import { TProduct } from "../../interfaces/product.interface";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, image, price, _id }: Partial<TProduct>) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ImgWrapper onClick={() => navigate(`/products/${_id}`)}>
        <Img src={image} alt={title} />
      </ImgWrapper>
      <Wrapper>
        <ProductName>{title}</ProductName>
        <Flex justify="space-between" align="center">
          <Price>$ {price}</Price>
          {
            // TODO: add addToCart redux action
          }
          <MdAddShoppingCart cursor="pointer" />
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;
