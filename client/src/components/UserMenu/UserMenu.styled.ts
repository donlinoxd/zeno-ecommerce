import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  padding: 1.2rem;
  border-radius: 3px;
  z-index: 10;
  width: 275px;
  min-width: 90%;
  /* 

// TODO: make a triangle arrow
  ::after {
    content: "";
    width: 0;
    height: 0;
    background: red;
    position: absolute;
    top: -20px;
    right: 0;
    border-bottom: 20px solid red;
    border-top: 20px;
    border-left: 20px;
    border-right: 20px solid red;
  } */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Button = styled(Link)<{ secondary?: true }>`
  width: 100%;
  padding: 0.75rem;
  letter-spacing: 1px;
  background: ${({ theme, secondary }) =>
    secondary ? null : theme.colors.black};
  border-radius: 5px;
  border: ${({ secondary }) =>
    secondary ? "1px solid rgba(0,0,0,0.5)" : null};
  text-align: center;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.black : theme.colors.white} !important;
  margin: 1rem 0 0;
  font-weight: bold;
`;

export const Profile = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 0.7rem;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  grid-column: 1fr;
  grid-row: 1/3;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
`;
export const Email = styled.h4`
  opacity: 0.5;
  font-style: italic;
  font-size: 0.9em;
`;
export const CartContainer = styled.div``;
export const CartSlider = styled.div`
  position: relative;
  width: 100%;
`;
export const Item = styled.div`
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.25);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  }
`;

export const Signout = styled.span`
  font-size: 0.9rem;
  cursor: pointer;
  grid-column: 2/3;
  margin: 0.5rem 0;

  :hover {
    text-decoration: underline;
  }
`;
