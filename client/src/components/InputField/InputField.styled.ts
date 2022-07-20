import styled, { cssProps } from "styled-components";

export const Wrapper = styled.div<{
  css?: cssProps;
}>`
  position: relative;
  ${({ css }) => css};
`;

export const Input = styled.input<{ error?: boolean }>`
  padding: 0 0.75rem;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ error }) =>
    error ? "1px solid rgba(238, 54, 54, 0.35)" : "1px solid rgba(0,0,0,0.35)"};

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    height: auto;
    top: -0.9rem;
    font-weight: bold;
    font-size: 0.7em;
  }
`;

export const Label = styled.label`
  position: absolute;
  height: 40px;
  top: 0;
  left: 0.75rem;
  display: grid;
  align-items: center;
  opacity: 60%;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.35s ease-out;
  font-size: 0.9rem;
`;

export const Error = styled.div`
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  right: 0;
  top: -0.9rem;
`;
