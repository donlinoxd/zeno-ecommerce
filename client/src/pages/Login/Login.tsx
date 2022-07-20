import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { FaGooglePlusG } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Button } from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import InputField from "../../components/InputField/InputField";
import Toast from "../../components/Toast/Toast";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import TUser from "../../interfaces/user.interface";
import { createSession } from "../../redux/actions/user.action";
import { loginUserSchema } from "../../validation/user.schema";
import * as ROUTES from "../../constant/routes.constant";
import {
  Background,
  BtnWrapper,
  Container,
  Form,
  GoogleBtn,
  headingcss,
  Paragraph,
  Wrapper,
} from "./Login.styled";

type TFormData = Pick<TUser, "username" | "password">;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userData, loading, error } = useAppSelector((state) => state.user);

  const { register, handleSubmit, control, reset } = useForm<TFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginUserSchema),
  });
  const { isValid, isSubmitted } = useFormState({ control });

  useEffect(() => {
    if (!loading && userData) {
      reset();
      navigate("/");
    }
  }, [loading, userData, reset, navigate]);

  useEffect(() => {
    if (error && isSubmitted) {
      toast.error(error);
    }
  }, [error, isSubmitted]);

  const loginUser: SubmitHandler<TFormData> = (userInput) => {
    dispatch(createSession(userInput));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(loginUser)} autoComplete="off">
        <Heading css={headingcss}>LOGIN.</Heading>

        <InputField type="text" {...register("username")} label="Username" />
        <InputField
          type="password"
          {...register("password")}
          label="Password"
        />
        <BtnWrapper>
          <Button disabled={!isValid}>
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </Button>
        </BtnWrapper>

        <Wrapper>
          <Paragraph style={{ fontSize: "0.95rem" }}>
            Don't have an account?{" "}
            <Link to={ROUTES.REGISTER}>
              <strong>REGISTER.</strong>
            </Link>
          </Paragraph>
          <Paragraph>
            <Link to="/">
              <strong style={{ fontWeight: "normal" }}>
                Forgot your password?
              </strong>
            </Link>
          </Paragraph>
        </Wrapper>
        <GoogleBtn>
          <FaGooglePlusG />
          <span>Sign in with Google</span>
        </GoogleBtn>
      </Form>
      <Background
        src="/images/bg--undressed.png"
        alt="Person with cap background"
      />
      <Toast />
    </Container>
  );
};

export default Login;
