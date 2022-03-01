import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFormLogo } from "../../Data/Images";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./../../components/Spinner/Spinner";
import { toast } from "react-toastify";
import { login, reset } from "./../../features/authSlice";
import {
  Container,
  FirstSection,
  SecondSection,
  LogoContainer,
  Logo,
  Title,
  Form,
  FormGroup,
  Input,
  Button,
  Error,
  TitleContainer,
  RegisterLinkContainer,
  RegisterLink,
} from "./Login-styles";
import Joi from "joi";
import {
  buttonVariants,
  titleVariants,
  logoContainerVariants,
  logoVariants,
  containerVariants,
  formVariants,
} from "./Login-keyframes";
import LoginTextAnimated from "./LoginTextAnimated";

const Login = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const schemaMain = Joi.object().keys({
    email: Joi.string().min(3).required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });

  const validate = () => {
    const errorMessage = {};
    const options = { abortEarly: false };
    const { error } = schemaMain.validate(formData, options);

    if (!error) return null;

    error.details.map((item) => (errorMessage[item.path[0]] = item.message));

    return errorMessage;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validation
    const error = validate();
    setErrors(error || {});
    if (error) return;

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object().keys({ [name]: schemaMain.extract(name) });
    const { error } = schema.validate(obj);

    return error ? error.details[0].message : null;
  };

  const onChange = ({ currentTarget: input }) => {
    const errorMessage = validateProperty(input);

    if (errorMessage) {
      setErrors((prevState) => ({
        ...prevState,
        [input.name]: errorMessage,
      }));
    } else delete errors[input.name];

    setFormData((prevState) => ({
      ...prevState,
      [input.name]: input.value,
    }));
  };
  useEffect(() => {
    if (isError) {
      toast.error(message, { position: toast.POSITION.TOP_CENTER });
    }

    if (isSuccess || user) {
      navigate("/myanaung");
    }

    dispatch(reset());
  }, [user, isSuccess, message, isError, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <FirstSection>
        <LogoContainer
          variants={logoContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Logo
            src={loginFormLogo}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          />
        </LogoContainer>
        <TitleContainer
          variants={titleVariants}
          initial="hidden"
          animate="hidden"
        >
          <Title variants={titleVariants} animate="visible" initial="hidden">
            <LoginTextAnimated>Login to Lawon Yaung Chyi</LoginTextAnimated>
          </Title>
        </TitleContainer>
      </FirstSection>
      <SecondSection>
        <Form onSubmit={onSubmit} variants={formVariants}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email..."
            />
            <Error>{errors.email}</Error>
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password..."
            />
            <Error>{errors.password}</Error>
          </FormGroup>
          <FormGroup>
            <Button type="submit" variants={buttonVariants} whileHover="hover">
              Submit
            </Button>
          </FormGroup>
          <RegisterLinkContainer>
            <Link to="/myanaung/register" style={{ textDecoration: "none" }}>
              <RegisterLink>Register</RegisterLink>
            </Link>
          </RegisterLinkContainer>
        </Form>
      </SecondSection>
    </Container>
  );
};

export default Login;
