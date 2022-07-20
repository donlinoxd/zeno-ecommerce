import React from "react";
// @ts-ignore
import Image2 from "../../assets/images/feature2.png";
// @ts-ignore
import Image1 from "../../assets/images/featureimg1.png";
import { Button } from "../Button/Button";
import {
  Container,
  Desc,
  Img,
  TextBar,
  Title,
  Wrapper,
} from "./FeaturedCategory.styled";

const FeaturedCategory: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={Image1} alt="" />
        <TextBar>
          <Title>SNAP BACK</Title>
          <Desc>
            Discover more <strong>new era</strong> caps.
          </Desc>
          <Button>SEE MORE</Button>
        </TextBar>
      </Wrapper>
      <Wrapper>
        <Img src={Image2} alt="" />
        <TextBar>
          <Title>VARCITY CAPS</Title>
          <Desc>
            Dress up with <strong>street style</strong> caps.
          </Desc>
          <Button border>SEE MORE</Button>
        </TextBar>
      </Wrapper>
    </Container>
  );
};

export default FeaturedCategory;
