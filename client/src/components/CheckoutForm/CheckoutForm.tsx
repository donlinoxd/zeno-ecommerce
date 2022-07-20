import { Button } from "../Button/Button";
import {
  Amount,
  Btn,
  Close,
  Container,
  Options,
  Promo,
  PromoInput,
  Quantity,
  Select,
  Text,
  Title,
  Total,
  TotalAmount,
  TotalText,
  Wrapper,
} from "./CheckoutForm.styled";

type CheckOutFormProps = {
  show?: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutForm = ({ show, setShow }: CheckOutFormProps) => {
  return (
    <>
      <Container show={show}>
        <Title>ORDER SUMMARY.</Title>
        <Quantity>
          Items: <strong>2</strong>
        </Quantity>
        <Options>
          <Wrapper>
            <Text>Subtotal</Text>
            <Amount>$ 24</Amount>
          </Wrapper>
          <Wrapper>
            <Text>Shipping Fee</Text>
            <Amount>$ 3</Amount>
          </Wrapper>
          <Select>
            <option value={3}>Standard Delivery - $ 3</option>
            <option value={7}>Premium Delivery - $ 7</option>
          </Select>
          <Wrapper>
            <Text>Promo Code</Text>
            <Amount>$ 0</Amount>
          </Wrapper>
          <Promo>
            <PromoInput type="text" placeholder="Enter Promo Code" />
            <Btn>APPLY</Btn>
          </Promo>
        </Options>
        <Total>
          <TotalText>Total</TotalText>
          <TotalAmount>$ 27</TotalAmount>
        </Total>
        <Button style={{ width: "100%" }}>CHECK OUT</Button>
        <Close onClick={() => setShow((prev) => !prev)} />
      </Container>
    </>
  );
};

export default CheckoutForm;
