import {
  Container,
  ThankTextContainer,
  ThankText,
  NameContainer,
  Rank,
  Name,
  ContactNumberContainer,
  ContactNumber,
  ContactName,
  PhoneNumber,
  Title,
  NumberWrapper,
  DeleteContainer,
} from "./Thank-styles";
import React, { useEffect, useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { axiosInstance } from "../../config";
import { useSelector } from "react-redux";

const Thank = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [contactMembers, setContactMembers] = useState([]);
  useEffect(() => {
    const abortCont = new AbortController();
    const fetchContactMember = async () => {
      await axiosInstance
        .get(`api/phones/phone`, { signal: abortCont.signal })
        .then((res) => {
          setContactMembers(res.data);
        })
        .catch((err) => {
          console.log("AbortedError", err);
        });
    };
    fetchContactMember();

    return () => abortCont.abort();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`api/phones/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <ThankTextContainer>
        <ThankText>
          လဝန်းရောင်ခြည်အဖွဲ့သားအားလုံးနှင့်အလှူရှင်များကိုကျေးဇူးတင်ပါသည်။
        </ThankText>
        <NameContainer>
          <Rank>အဖွဲ့ဝင်</Rank>
          <Name>ဥာဏ်လင်းထွန်း</Name>
        </NameContainer>
      </ThankTextContainer>
      {currentUser.isAdmin ? (
        <ContactNumberContainer>
          <Title>ဆက်သွယ်ထားသောဖုန်းနံပါတ်များ</Title>
          <NumberWrapper>
            {contactMembers.map((m) => (
              <ContactNumber key={m._id}>
                <DeleteContainer onClick={() => handleDelete(m._id)}>
                  <DeleteOutline />
                </DeleteContainer>
                <ContactName>{m.username}</ContactName>
                <PhoneNumber>{m.phone}</PhoneNumber>
              </ContactNumber>
            ))}
          </NumberWrapper>
        </ContactNumberContainer>
      ) : null}
    </Container>
  );
};

export default Thank;
