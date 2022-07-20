import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem 0;

  ${({ theme }) => theme.screen.tablet} {
    grid-template-columns: repeat(6, 1fr);
    padding: 2rem 0;
  } ;
`;
export const Title = styled.h2`
  grid-column: span 1;
  text-align: center;
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  justify-self: center;
  margin-bottom: 1.3rem;
  font-weight: bold;
  font-size: 1.3rem;

  ${({ theme }) => theme.screen.tablet} {
    grid-column: span 6;
    font-size: 1.5rem;
  } ;
`;

export const Collection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  ${({ theme }) => theme.screen.tablet} {
    grid-column: span 4;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0.85rem;
  } ;
`;

export const Wrapper = styled.div`
  grid-column: span 1;

  ${({ theme }) => theme.screen.tablet} {
    grid-column: span 2;
  } ;
`;

export const Img = styled.img`
  grid-column: span 1;
  width: 100%;
  height: calc(100vw * 0.8);
  object-fit: cover;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.35);

  ${({ theme }) => theme.screen.tablet} {
    height: 100%;
  }
  ${({ theme }) => theme.screen.laptopLg} {
    height: 95%;
  } ;
`;
