import { radialGradient } from "./../../pages/Login/Login.styled";
import styled from "styled-components";

export const Container = styled.div`
  ${radialGradient}
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem;
  text-align: center;

  ${({ theme }) => theme.screen.tablet} {
    padding: 4rem 1rem;
  } ;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 2rem;

  ${({ theme }) => theme.screen.tablet} {
    font-size: 2.5rem;
  } ;
`;
export const Desc = styled.p`
  opacity: 0.8;
  margin: 1rem 0;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  outline: none;
  background: ${({ theme }) => theme.colors.gray};
  padding: 0.7rem 0.5rem;
  border: none;
  width: 70%;
  max-width: 400px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 2px;
  }
`;
export const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.7rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
