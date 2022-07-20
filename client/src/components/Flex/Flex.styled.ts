import styled, { css, cssProps } from "styled-components";

export interface FlexProps {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | "space-between"
    | "space-around"
    | "space-evenly";
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
  absolute?: true;
  w?: string;
  h?: string;
  css?: cssProps;
}

export const cssFlex = css<FlexProps>`
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  ${({ css }) => css};
`;

export const Flex = styled.div`
  display: flex;
  ${cssFlex}
`;
