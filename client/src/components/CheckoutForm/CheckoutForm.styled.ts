import styled from "styled-components";

export const Container = styled.div<{ show?: boolean }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(100%, -50%);
  z-index: 1;
  width: 400px;
  max-width: 90%;
  padding: 1.5rem 1.35rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  font-size: 0.9rem;
  transition: transform 0.2s ease-out;
  transform: ${({ show }) => (show ? "translate(-50%, -50%)" : null)};

  ${({ theme }) => theme.screen.tablet} {
    position: static;
    transform: none;
  } ;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  padding: 0.25rem 0;
  text-align: center;
  margin-bottom: 1.15rem;
`;
export const Quantity = styled.div`
  text-align: right;
`;
export const Options = styled.div`
  padding: 1.15rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;

  :not(:first-child) {
    margin-top: 0.35rem;
  }
`;
export const Text = styled.span``;
export const Amount = styled.span``;

export const TotalText = styled.strong`
  font-size: 1.1rem;
`;
export const TotalAmount = styled.strong`
  font-size: 1.1rem;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  margin: 1rem 0;
`;

export const Select = styled.select`
  background: ${({ theme }) => theme.colors.gray};
  width: 100%;
  outline: none;
  border: none;
  padding: 0.5rem 0.7rem;
  font-size: 0.85rem;
  font-family: "Century Gothic";
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.2rem;
`;

export const Promo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.2rem;
  height: 34px;
  border-radius: 2px;
  overflow: none;
`;

export const PromoInput = styled.input`
  background: ${({ theme }) => theme.colors.gray};
  outline: none;
  border: none;
  padding: 0.5rem 0.7rem;
  flex: 1;
  font-size: 0.85rem;
  font-family: "Century Gothic";
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Btn = styled.button`
  background: rgba(0, 0, 0, 0.7);
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.7rem;
  padding: 0.4rem;
  font-weight: bold;
`;

export const Close = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    transform: rotate(-45deg);
    background: rgba(0, 0, 0, 0.7);
  }
  ::after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    transform: rotate(45deg);
    background: rgba(0, 0, 0, 0.7);
  }

  ${({ theme }) => theme.screen.tablet} {
    display: none;
  } ;
`;
