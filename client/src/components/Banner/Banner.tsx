import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import {
  Background,
  Container,
  Description,
  Header,
  Img,
  Shallow,
  Title,
} from "./Banner.styled";

const Banner = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>CAPS IN FASHION</Title>
          <Description>
            Discover our collection of streetstyle caps. Real fashion is within
            us.
          </Description>
          <Link to="/shop">
            <Button border>SHOP NOW</Button>
          </Link>
        </Header>
        <Background>
          <Img src="/images/bg-header.png" alt="background" />
        </Background>
      </Container>
      <Shallow />
    </>
  );
};

export default Banner;
