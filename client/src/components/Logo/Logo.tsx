import React from "react";
import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.styled";
import * as ROUTES from "../../constant/routes.constant";

const Logo: React.FC<
  React.ComponentPropsWithoutRef<"h1"> & { color?: string }
> = (props) => {
  return (
    <Link to={ROUTES.HOME}>
      <StyledLogo {...props}>ZENO.</StyledLogo>
    </Link>
  );
};

export default Logo;
