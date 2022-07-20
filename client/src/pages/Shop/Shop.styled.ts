import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
`;
export const Products = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  ${({ theme }) => theme.screen.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  ${({ theme }) => theme.screen.laptopLg} {
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
  } ;
`;
