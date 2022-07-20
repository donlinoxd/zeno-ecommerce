import styled from "styled-components";
import { radialGradient } from "./../../pages/Login/Login.styled";

export const Container = styled.div`
  ${radialGradient}
  width: 100%;
  position: absolute;
  left: 0;
  display: flex;
  height: 100vh;
  max-height: 600px;
  align-items: flex-end;

  ${({ theme }) => theme.screen.tablet} {
    justify-content: center;
  } ;
`;

export const Header = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  ${({ theme }) => theme.screen.tablet} {
    position: relative;
    padding: 0;
    justify-content: center;
    height: 100%;
    width: 320px;
  }

  ${({ theme }) => theme.screen.laptop} {
    align-items: start;
    text-align: left;
    width: 390px;
  } ;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  ${({ theme }) => theme.screen.laptop} {
    font-size: 2.75rem;
  } ;
`;
export const Description = styled.p`
  margin: 10rem 1rem 2rem;

  ${({ theme }) => theme.screen.tablet} {
    margin: 2rem 0 1rem;
  } ;
`;

export const Background = styled.div`
  opacity: 75%;
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.screen.tablet} {
    width: auto;
  } ;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: drop-shadow(10px 4px 20px rgba(0, 0, 0, 0.75));
  ${({ theme }) => theme.screen.tablet} {
    width: auto;
  } ;
`;

export const Shallow = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 600px;
`;
