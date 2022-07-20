import styled from "styled-components";

export const StyledLogo = styled.h1`
  color: ${({ theme, color }) => color && theme.colors.black};
  font-size: 1.5rem;
  font-weight: 700;

  ${({ theme }) => theme.screen.tablet} {
    font-size: 1.8rem;
  } ;
`;
