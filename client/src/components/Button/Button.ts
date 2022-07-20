import styled from "styled-components";

export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children"
> & {
  children: string;
  border?: true;
};

export const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.black};
  border: ${({ border }) =>
    border ? "1px solid rgba(255, 255, 255, 0.35)" : "none"};
  border-radius: 1px;
  padding: 0.8rem 1.45rem;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.2px;
  font-size: 1.1rem;
  opacity: ${({ disabled }) => disabled && 0.5};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
