import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 0.5rem;
`;

export const ImgWrapper = styled.div`
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  width: 50%;
  padding: 40% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 80%;
  object-fit: cover;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  position: absolute;
`;

export const Wrapper = styled.div`
  padding: 0.5rem 1rem 0;
  font-size: 0.8rem;

  ${({ theme }) => theme.screen.laptop} {
    font-size: 1rem;
  } ;
`;
export const ProductName = styled.span`
  text-align: center;
  display: block;
  margin: 0.5rem 0;
  font-weight: bold;

  ${({ theme }) => theme.screen.laptop} {
    font-size: 1rem;
  } ;
`;
export const Price = styled.span``;
