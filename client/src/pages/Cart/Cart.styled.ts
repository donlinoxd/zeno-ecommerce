import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  overflow: hidden;
  margin: 1rem 0;
  ${({ theme }) => theme.screen.tablet} {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
  } ;
`;

export const GoTo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.95rem;

  ${({ theme }) => theme.screen.laptop} {
    font-size: 1.1rem;
  }

  a,
  span {
    margin: 0 0.65rem;
  }

  ${({ theme }) => theme.screen.tablet} {
    :last-child {
      display: none;
    }
  } ;
`;
