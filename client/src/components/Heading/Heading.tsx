import React from "react";
import { cssProps } from "styled-components";
import { Text, Wrapper } from "./Heading.styled";

type HeadingProps = Omit<React.ComponentPropsWithoutRef<"h1">, "children"> & {
  children: string;
  css?: cssProps;
  size?: number;
};

const Heading = ({ children, css, size }: HeadingProps) => {
  return (
    <Wrapper css={css} size={size}>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Heading;
