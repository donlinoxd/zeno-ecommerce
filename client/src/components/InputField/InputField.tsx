import React, { forwardRef } from "react";
import { cssProps } from "styled-components";
import { Wrapper, Input, Label, Error } from "./InputField.styled";
import { FieldError } from "react-hook-form";

type inputFieldProps = React.ComponentPropsWithRef<"input"> & {
  label: string;
  css?: cssProps;
  error?: FieldError;
};

const InputField: React.FC<inputFieldProps> = forwardRef(
  ({ type, label, name, onChange, onBlur, css, error, ...props }, ref) => {
    return (
      <Wrapper css={css}>
        <Input
          {...props}
          type={type}
          id={name}
          placeholder={label}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          error={!!error}
        />
        <Label htmlFor={name}>{label}</Label>
        {error && <Error>{error.message}</Error>}
      </Wrapper>
    );
  }
);

export default InputField;
