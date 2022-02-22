import Modal from "react-modal";
import {
  Title,
  Container,
  CloseContainer,
  ButtonContainer,
  HelpFirst,
  HelpSecond,
  Warning,
  First,
  InputContainer,
  InputLabel,
  Input,
  SubmitButton,
  Text,
  InputPhone,
  Second,
  TitleSecond,
  Error,
} from "./ModalOverlay-styles";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { axiosInstance } from "./../../config";
import { useSelector } from "react-redux";
import Joi from "joi";

Modal.setAppElement("#root");
toast.configure();

const ModalOverlay = ({ open, handleOpen }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    phone: "",
  });

  const schemaMain = Joi.object().keys({
    phone: Joi.string().length(11).required().label("Phone Number"),
  });

  const validate = () => {
    const errorMessage = {};
    const options = { abortEarly: false };
    const { error } = schemaMain.validate(formData, options);

    if (!error) return null;

    error.details.map((item) => (errorMessage[item.path[0]] = item.message));

    return errorMessage;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object().keys({ [name]: schemaMain.extract("phone") });
    const { error } = schema.validate(obj);

    return error ? error.details[0].message : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validate
    const error = validate();
    setErrors(error || {});
    if (error) return;
    try {
      const response = await axiosInstance.post(
        `api/phones/${currentUser._id}`,
        {
          userId: currentUser._id,
          username: currentUser.username,
          phone: formData.phone,
        }
      );
      response &&
        toast.success("ပေးပို့မှုအောင်မြင်ပါတယ်။", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2300,
        });
      handleOpen();
    } catch (error) {
      toast.warn(error.response.data, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2300,
      });
      handleOpen();
    }
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
  return (
    <Modal
      isOpen={open}
      style={{
        overlay: {
          zIndex: 10000,
        },
      }}
    >
      <Container first={first} second={second}>
        <Title first={first} second={second}>
          ဘယ်လိုကူညီမှာလဲ။
        </Title>
        <ButtonContainer>
          <HelpFirst
            onClick={() => {
              setFirst(!first);
              setSecond(false);
            }}
            first={first}
          >
            လူကိုယ်တိုင်ကူညီမယ်။
          </HelpFirst>
          <HelpSecond
            onClick={() => {
              setSecond(!second);
              setFirst(false);
            }}
            second={second}
          >
            ပစ္စည်းလှူဒါန်းမယ်။
          </HelpSecond>
        </ButtonContainer>
        {first && (
          <>
            <Warning>မြန်အောင်မြို့နယ်အတွင်းနေထိုင်မှသာ။</Warning>
            <Text>အစီအစဥ် ရှိပါကဆက်သွယ်ပါမယ်။</Text>
            <Text>ဖုန်းနံပါတ်ချန်ထားပေးပါဗျ။</Text>
            <First onSubmit={handleSubmit}>
              <InputContainer>
                <InputLabel>ဖုန်း</InputLabel>
                <InputPhone>
                  <Input
                    onChange={onChange}
                    placeholder="Enter your mobile phone"
                    type="number"
                    name="phone"
                  />
                  <Error>{errors.phone}</Error>
                  <SubmitButton type="submit">ပို့မယ်</SubmitButton>
                </InputPhone>
              </InputContainer>
            </First>
          </>
        )}
        {second && (
          <Second>
            <TitleSecond>
              အသင်း၏ရုံးဖုန်းနံပါတ် ၀၉-၉၇၅၆၄၃၄၄၁
              ကိုဆက်သွယ်ပေးပါ။အလှူရှင်များကိုစောင့်မျှော်နေပါတယ်။
            </TitleSecond>
          </Second>
        )}
        <CloseContainer
          onClick={() => {
            handleOpen(false);
            setFirst(false);
            setSecond(false);
          }}
        >
          <CloseOutlined />
        </CloseContainer>
      </Container>
    </Modal>
  );
};

export default ModalOverlay;
