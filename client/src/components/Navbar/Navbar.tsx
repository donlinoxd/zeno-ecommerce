import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPersonOutline, MdOutlineShoppingBag } from "react-icons/md";
import Logo from "../Logo/Logo";
import { Container, LogoWrapper, Nav } from "./Navbar.styled";
import UserMenu from "../UserMenu/UserMenu";
import * as ROUTES from "../../constant/routes.constant";

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <Link to={ROUTES.SHOP}>SHOP</Link>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Nav>
        <MdOutlineShoppingBag
          cursor={"pointer"}
          style={{ marginRight: "1rem" }}
          onClick={() => {
            navigate(ROUTES.CART);
          }}
        />
        <MdPersonOutline
          cursor={"pointer"}
          onClick={() => {
            setShowUserMenu(!showUserMenu);
          }}
        />
        {
          // TODO: add addtocart redux-action
        }
        {showUserMenu && <UserMenu />}
      </Nav>
    </Container>
  );
};

export default Navbar;
