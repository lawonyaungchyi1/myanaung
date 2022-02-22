import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFormLogo } from "../../Data/Images";
import { useNavigate } from "react-router-dom";
import Spinner from "./../../components/Spinner/Spinner";
import { toast } from "react-toastify";
import { login, reset } from "./../../features/authSlice";
import {
  FirstSection,
  SecondSection,
  Logo,
  Title,
  Form,
  FormGroup,
  Input,
  Button,
  Error,
} from "./Login-styles";
import Joi from "joi";

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
    <>
      <FirstSection>
        <Logo src={loginFormLogo} />
        <Title>Login to Lawon Yaung Chyi</Title>
      </FirstSection>
      <SecondSection>
        <Form onSubmit={onSubmit}>
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
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </SecondSection>
    </>
  );
};

export default Login;
