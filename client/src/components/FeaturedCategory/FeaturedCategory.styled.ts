import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 0;

  ${({ theme }) => theme.screen.tablet} {
    flex-direction: row;
    padding: 1rem 0;
  }

  ${({ theme }) => theme.screen.laptop} {
    padding: 3rem 0;
  } ;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;

  :first-child {
    margin-bottom: 0.5rem;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.5)
    );
  }
  :not(:first-child) {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.black} 70%,
      rgba(0, 0, 0, 0.8)
    );

    p {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ theme }) => theme.screen.tablet} {
    width: 50%;

    :first-child {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
  ${({ theme }) => theme.screen.laptop} {
    :first-child {
      margin-right: 3rem;
    }
  } ;
`;
export const Img = styled.img`
  object-fit: cover;
  width: 40%;
  margin-right: 1rem;

  ${({ theme }) => theme.screen.laptop} {
    width: 45%;
  } ;
`;
export const TextBar = styled.div`
  width: 55%;
  padding: 1.35rem 0;
  font-size: 1rem;

  ${({ theme }) => theme.screen.laptop} {
    font-size: 1.35rem;
  } ;
`;
export const Title = styled.h4`
  font-size: 1.2em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
export const Desc = styled.p`
  font-size: 0.75em;
  margin: 0.35em 0;

  ${({ theme }) => theme.screen.laptop} {
    margin: 0.7em 0;
  } ;
`;
