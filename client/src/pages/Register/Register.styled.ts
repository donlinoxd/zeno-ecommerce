import styled, { css } from "styled-components";
import { radialGradient } from "../Login/Login.styled";

export const Container = styled.div`
  ${radialGradient}
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.gray};
  width: 350px;
  max-width: 90%;
  padding: 2rem;
  border-radius: 2px;
  display: grid;
  gap: 1.35rem 1.5rem;
  z-index: 1;
  margin: 2rem 0;

  ${({ theme }) => theme.screen.tablet} {
    grid-template-columns: 1fr 1fr;
    width: 650px;
  } ;
`;

export const Wrapper = styled.div`
  grid-column: span 2;
  margin: 0.2rem 0;
  display: flex;
  justify-content: center;
`;

export const Paragraph = styled.p`
  text-align: left;
  font-size: 0.85em;
  span {
    font-weight: bold;
  }

  strong {
    text-decoration: underline;
  }
`;

export const Background = styled.img`
  position: absolute;
  right: -40%;
  bottom: 0;
  height: 100%;
  object-fit: cover;
  opacity: 75%;
  filter: drop-shadow(-10px 4px 20px rgba(0, 0, 0, 0.75));

  ${({ theme }) => theme.screen.tablet} {
    right: 0;
  } ;
`;

export const headingcss = css`
  grid-column: span 2;
  margin-bottom: 1rem;
`;

export const inputcss = css`
  grid-column: span 2;

  ${({ theme }) => theme.screen.tablet} {
    grid-column: span 1;
  } ;
`;
