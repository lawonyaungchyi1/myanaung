import React from "react";
import {
  Title,
  Wrapper,
  CloseContainer,
  PhoneContainer,
  Phone,
  Name,
  Number,
} from "./Oxygen-styles";
import Modal from "react-modal";
import { CloseOutlined, PhoneEnabledOutlined } from "@mui/icons-material";
import { phones } from "../../Data/Phone";
const Oxygen = ({ open, handleOpen }) => {
  return (
    <>
      <Modal
        isOpen={open}
        style={{
          overlay: {
            zIndex: 10000,
          },
        }}
      >
        <Wrapper>
          <Title>
            အောက်ဆီဂျင်လှူဒါန်းရန်အတွက်အောက်ပါဖုန်းနံပါတ်များကိုဆက်သွယ်ပေးပါခင်ဗျာ။
          </Title>
          <PhoneContainer>
            {phones.map((p) => (
              <Phone key={p.id}>
                <Name>
                  <PhoneEnabledOutlined fontSize="small" />
                  {p.name}
                </Name>
                <Number>{p.phone}</Number>
              </Phone>
            ))}
          </PhoneContainer>
          <CloseContainer onClick={handleOpen}>
            <CloseOutlined fontSize="medium" />
          </CloseContainer>
        </Wrapper>
      </Modal>
    </>
  );
};

export default Oxygen;
