import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginFormLogo } from "../../Data/Images";
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
  LoginLink,
  LoginLinkContainer,
} from "./Register-styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "./../../features/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import Joi from "joi";
import {
  buttonVariants,
  titleVariants,
  logoContainerVariants,
  logoVariants,
  containerVariants,
  formVariants,
} from "./Register-keyframes";
import RegisterTextAnimated from "./RegisterTextAnimated";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const schemaMain = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required()
      .label("Username"),
    email: Joi.string().min(3).required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
    password2: Joi.string().min(6).required().label("Confirm Password"),
  });

  const { username, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

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

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object().keys({ [name]: schemaMain.extract(name) });
    const { error } = schema.validate(obj);

    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const errorMessage = {};
    const options = { abortEarly: false };
    const { error } = schemaMain.validate(formData, options);

    console.log(error);

    if (!error) return null;

    error.details.map((item) => (errorMessage[item.path[0]] = item.message));

    return errorMessage;
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    //Validation
    const error = validate();
    setErrors(error || {});
    if (error) return;

    if (password !== password2) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
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
          <Title variants={titleVariants} initial="hidden" animate="visible">
            <RegisterTextAnimated>
              Registeration Form For New Account
            </RegisterTextAnimated>
          </Title>
        </TitleContainer>
      </FirstSection>
      <SecondSection>
        <Form onSubmit={onSubmit} variants={formVariants}>
          <FormGroup>
            <Input
              // type="text"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Enter your name..."
            />
            <Error>{errors.username}</Error>
          </FormGroup>
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
            <Input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm password"
            />
            <Error>{errors.password2}</Error>
          </FormGroup>
          <FormGroup>
            <Button type="submit" variants={buttonVariants} whileHover="hover">
              Submit
            </Button>
          </FormGroup>
          <LoginLinkContainer>
            <Link to="/myanaung/login" style={{ textDecoration: "none" }}>
              <LoginLink>Login</LoginLink>
            </Link>
          </LoginLinkContainer>
        </Form>
      </SecondSection>
    </Container>
  );
};

export default Register;
