import { Email } from "../../assets/icons/Email";
import { Facebook } from "../../assets/icons/Facebook";
import { Linkedin } from "../../assets/icons/Linkedin";
import { Location } from "../../assets/icons/Location";
import { Phone } from "../../assets/icons/Phone";
import { Pinterest } from "../../assets/icons/Pinterest";
import Logo from "../Logo/Logo";
import {
  Container,
  Detailed,
  DetailWrapper,
  List,
  Social,
  Socials,
  Text,
  Title,
  Ul,
  Wrapper,
} from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maxime
          tenetur autem eaque nulla, delectus quod omnis similique animi
          voluptatem?
        </Text>
        <Socials>
          <Social bg="blue">
            <Facebook />
          </Social>
          <Social bg="darkblue">
            <Linkedin />
          </Social>
          <Social bg="red">
            <Pinterest />
          </Social>
        </Socials>
      </Wrapper>
      <Wrapper>
        <Title>Useful Links</Title>
        <Ul>
          <List>Home</List>
          <List>Shop</List>
          <List>Wishlist</List>
          <List>Order Tracking</List>
          <List>Cart</List>
          <List>My Account</List>
          <List>Terms & Conditions</List>
          <List>Features</List>
        </Ul>
      </Wrapper>
      <Wrapper>
        <Title>Contact</Title>
        <DetailWrapper>
          <Detailed>
            <Location />
            <span>322 Quezon City, Metro Manila</span>
          </Detailed>
          <Detailed>
            <Phone />
            <span>+639476434739</span>
          </Detailed>
          <Detailed>
            <Email />
            <span>don.lino.xd@gmail.com</span>
          </Detailed>
        </DetailWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
