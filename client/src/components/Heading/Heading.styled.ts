import styled, { cssProps } from "styled-components";

export const Wrapper = styled.div<{
  css?: cssProps;
  size?: number;
}>`
  padding-bottom: 0.5rem;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  font-size: ${({ size }) => (size ? `${size}em` : "1em")};

  ${({ css }) => css}
`;

export const Text = styled.h1`
  font-weight: bolder;
  font-size: 1.2rem;

  ${({ theme }) => theme.screen.tablet} {
    font-size: 1.4rem;
  }
`;
