import React from "react";
import {
  Container,
  PoemContainer,
  PersonContainer,
  Title,
  Body,
  OpenComma,
  CloseComma,
  Poem,
  Left,
  Right,
  Img,
} from "./First-styles";
import {
  pyaePhyoZawImage,
  closeCommaImage,
  openCommaImage,
} from "../../Data/Images";

const First = () => {
  return (
    <Container>
      <PoemContainer>
        <Poem>
          <Title>ပရဟိတအလုပ်ဆိုတာ</Title>
          <Body>
            <Left>
              <OpenComma src={openCommaImage} />
              နာမည်ကြီးသူတိုင်းလည်းမလုပ်ဘူး။ <br />
              ပိုက်ဆံရှိသူတိုင်းလည်းမလှူဘူး။ <br />
              ခွန်အားရှိသူတိုင်းလည်းမကူညီဘူး။
              <br />
              အချိန်အားသူတိုင်းလည်းစိတ်မဝင်စားဘူး။
            </Left>
            <Right>
              ပျော်ရွှင်ငြိမ်းချမ်းစေချင်တဲ့မေတ္တာတရား
              <br />
              ကြင်နာတတ်တဲ့ဂရုဏာတရား
              <br />
              စာနာတတ်တဲ့နှလုံးသား
              <br />
              ကူညီချင်တဲ့စိတ်စေတနာတရားနဲ့
              <br />
              နှလုံးသားလှသူများသာလုပ်နိုင်တဲ့အလုပ်။
              <CloseComma src={closeCommaImage} />
            </Right>
          </Body>
        </Poem>
      </PoemContainer>
      <PersonContainer>
        <Img src={pyaePhyoZawImage} />
      </PersonContainer>
    </Container>
  );
};

export default First;
