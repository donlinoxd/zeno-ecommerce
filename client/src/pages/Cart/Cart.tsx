import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import CartItemList from "../../components/CartItems/CartItemList";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { Flex } from "../../components/Flex/Flex.styled";
import Heading from "../../components/Heading/Heading";
import { Container, GoTo, Wrapper } from "./Cart.styled";
import * as ROUTES from "../../constant/routes.constant";

const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Heading>Shopping Cart.</Heading>
      <Wrapper>
        <CartItemList />
        <CheckoutForm show={show} setShow={setShow} />
      </Wrapper>
      <Flex justify="space-between" align="center">
        <GoTo>
          <ArrowLeft style={{ fontSize: "0.75em" }} />
          <Link to={ROUTES.SHOP}>Shop</Link>
        </GoTo>
        <GoTo onClick={() => setShow((prev) => !prev)}>
          <span>Checkout</span> <ArrowRight style={{ fontSize: "0.75em" }} />
        </GoTo>
      </Flex>
    </Container>
  );
};

export default Cart;
