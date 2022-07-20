import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0.5rem 0;

  & > a {
    font-weight: bold;
  }

  ${({ theme }) => theme.screen.tablet} {
    padding: 1rem 0;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
`;

// export const NavLinks = styled.ul`
//   display: flex;
//   position: absolute;
//   right: 0;
//   top: 120%;
//   background: ${({ theme }) => theme.colors.white};
//   flex-direction: column;
//   padding: 1rem 0.3rem;
//   border-radius: 5px;
//   z-index: 10;

//   ${({ theme }) => theme.screen.tablet} {
//     position: static;
//     display: flex;
//     flex-direction: row;
//     background: none;
//     padding: 0;
//   } ;
// `;

// export const NavLink = styled(Link)<{ border?: true }>`
//   margin: 0 0.5rem;
//   padding: 0.25rem;
//   border-bottom: ${({ border }) =>
//     border ? "1px solid rgba(0,0,0,0.2)" : null};

//   ${({ theme }) => theme.screen.tablet} {
//     border: none;
//   } ;
// `;
