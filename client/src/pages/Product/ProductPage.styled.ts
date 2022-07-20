import styled, { css } from "styled-components";
import { Button as StyledButton } from "../../components/Button/Button";

export const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.75rem;
  grid-template-columns: 1fr;
  gap: 2rem;
  ${({ theme }) => theme.screen.tablet} {
    grid-template-columns: 1fr 1fr;
    padding: 2.75rem;
    gap: 2.5rem;
  }
  ${({ theme }) => theme.screen.laptop} {
    padding: 2.75rem 3.75rem;
    gap: 3.5rem;
  } ;
`;

export const Wrapper = styled.div`
  grid-column: 1fr;
  position: relative;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);
  width: 50%;
  padding: 50%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

export const Desc = styled.p`
  font-size: 0.85em;
  margin: 1.5rem 0;
  text-align: center;

  ${({ theme }) => theme.screen.tablet} {
    font-size: 0.95em;
    text-align: left;
  } ;
`;

export const Price = styled.strong`
  font-size: 1.35rem;
  margin-bottom: 1rem;
  align-self: center;

  ${({ theme }) => theme.screen.tablet} {
    font-size: 1.55rem;
    align-self: flex-start;
  }
  ${({ theme }) => theme.screen.laptop} {
    font-size: 1.85rem;
  }
`;

export const headingcss = css`
  text-align: center;

  ${({ theme }) => theme.screen.tablet} {
    text-align: left;
  }

  ${({ theme }) => theme.screen.laptop} {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Button = styled(StyledButton)`
  align-self: center;

  ${({ theme }) => theme.screen.tablet} {
    align-self: flex-start;
  }
`;
