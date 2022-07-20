import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;
export const CartItem = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 2rem;

  ${({ theme }) => theme.screen.tablet} {
    margin: 0;
  }

  ${({ theme }) => theme.screen.laptop} {
    max-width: 500px;
  }

  ${({ theme }) => theme.screen.laptopLg} {
    max-width: 600px;
  } ;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15)
    ${({ theme }) => theme.screen.laptop} {
    width: 130px;
    height: 130px;
  }
  ${({ theme }) => theme.screen.laptopLg} {
    width: 160px;
    height: 160px;
  } ;
`;
export const Img = styled.img`
  width: 90%;
  object-fit: cover;
`;
export const Wrapper = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 0.5rem;
  font-size: 1rem;

  ${({ theme }) => theme.screen.laptop} {
    font-size: 1.1rem;
  }

  ${({ theme }) => theme.screen.laptopLg} {
    font-size: 1.2rem;
  } ;
`;
export const ProductName = styled.strong`
  font-size: 1em;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;

  span {
    margin: 0 0.5rem;
    font-size: 1.25rem;
  }
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  width: 3rem;

  ${({ theme }) => theme.screen.laptop} {
    font-size: 1.35rem;
    width: 4rem;
  }

  ${({ theme }) => theme.screen.laptopLg} {
    font-size: 1.5rem;
    width: 5rem;
  } ;
`;

export const flexcss = css`
  font-size: 0.9em;
  margin-right: 1rem;
  align-items: center;

  strong {
    font-weight: bold;
    opacity: 0.65;
  }
`;
