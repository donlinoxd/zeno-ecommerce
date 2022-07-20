import {
  Container,
  CartItem,
  Img,
  Price,
  ProductName,
  Quantity,
  Wrapper,
  flexcss,
  ImgWrapper,
} from "./CartItemListstyled";
//@ts-ignore
import product1 from "../../assets/images/product1.jpg";
import { Flex } from "../Flex/Flex.styled";
import { MdAdd, MdRemove } from "react-icons/md";

const CartItemList = () => {
  return (
    <Container>
      <CartItem>
        <ImgWrapper>
          <Img src={product1} alt=" " />
        </ImgWrapper>
        <Wrapper>
          <ProductName>BEIGE LINEN VARCITY</ProductName>
          <Flex>
            <Flex direction="column" css={flexcss}>
              <strong>QUANTITY</strong>
              <Quantity>
                <MdRemove cursor="pointer" />
                <span>1</span>
                <MdAdd cursor="pointer" />
              </Quantity>
            </Flex>
          </Flex>
        </Wrapper>
        <Price>$ 12</Price>
      </CartItem>
    </Container>
  );
};

export default CartItemList;
