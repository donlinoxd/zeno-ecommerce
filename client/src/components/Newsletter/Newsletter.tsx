import {
  Button,
  Container,
  Desc,
  Input,
  Title,
  Wrapper,
} from "./Newsletter.styled";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite caps.</Desc>
      <Wrapper>
        <Input
          type="text"
          placeholder="Your email"
          aria-label="Enter your email"
        />
        <Button>SEND</Button>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
