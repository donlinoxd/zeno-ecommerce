import { yupResolver } from "@hookform/resolvers/yup";
import * as ROUTES from "../../constant/routes.constant";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import InputField from "../../components/InputField/InputField";
import http from "../../config/axios.config";
import TUser from "../../interfaces/user.interface";
import { registerUserSchema } from "../../validation/user.schema";
import {
  Background,
  Container,
  Form,
  headingcss,
  inputcss,
  Paragraph,
  Wrapper,
} from "./Register.styled";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, control, reset } = useForm<TUser>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerUserSchema),
    delayError: 1000,
  });

  const { errors, isSubmitting, isSubmitSuccessful } = useFormState({
    control,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigate(ROUTES.LOGIN);
      reset();
    }
  }, [isSubmitSuccessful, reset, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const createUser: SubmitHandler<TUser> = async (userData) => {
    try {
      await http.post("auth/register", userData);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.error);
      } else {
        setError("Something went wrong!");
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(createUser)} autoComplete="off">
        <Heading css={headingcss}>CREATE AN ACCOUNT.</Heading>
        <InputField
          css={inputcss}
          type="text"
          {...register("firstName")}
          label="First Name"
          error={errors.firstName}
        />
        <InputField
          css={inputcss}
          type="text"
          {...register("lastName")}
          label="Last Name"
          error={errors.lastName}
        />
        <InputField
          css={inputcss}
          type="text"
          {...register("username")}
          label="Username"
          error={errors.username}
        />
        <InputField
          css={inputcss}
          type="text"
          {...register("email")}
          label="Email"
          error={errors.email}
        />
        <InputField
          css={inputcss}
          type="password"
          {...register("password")}
          label="Password"
          error={errors.password}
        />
        <InputField
          css={inputcss}
          type="password"
          {...register("confirmPassword")}
          label="Confirm Password"
          error={errors.confirmPassword}
        />
        <Wrapper>
          <Paragraph>
            By creating an account, I consent to the processing of my personal
            data accordance with the <span>PRIVACY POLICY</span>
          </Paragraph>
        </Wrapper>

        <Wrapper>
          <Button disabled={isSubmitting}>
            {isSubmitting ? "LOADING..." : "SIGN UP"}
          </Button>
        </Wrapper>

        <Wrapper>
          <Paragraph style={{ fontSize: "1rem" }}>
            Already have an account?
            <Link to={ROUTES.LOGIN}>
              <strong>LOGIN.</strong>
            </Link>
          </Paragraph>
        </Wrapper>
      </Form>
      <Background
        src="/images/bg--undressed.png"
        alt="Person with cap background"
      />
      <ToastContainer />
    </Container>
  );
};

export default Register;
