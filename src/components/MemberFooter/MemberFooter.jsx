import React from "react";
import {
  Container,
  Title,
  Wrapper,
  Underline,
  Body,
  Text,
  Square,
  SquareOne,
  SquareTwo,
  SquareThree,
  SquareFour,
  BottomContainer,
  TextFooter,
  NameLink,
} from "./MemberFooter.-styles";
import { nyanLinTunFbLink } from "./../../Data/Materials";

const MemberFooter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          ကျွန်တော်တို့အဖွဲ့ကမြန်အောင်မြို့နယ်အတွင်းသွေးလှူဒါန်းပေးနေပါတယ်။
        </Title>
        <Underline></Underline>
      </Wrapper>
      <Body>
        <Text>
          လဝန်းရောင်ခြည်အသင်းကို ၂/၂၀၁၅
          တွင်စတင်ဖွဲ့စည်းခဲ့ပါသည်။ယခုအခါအဖွဲ့ဝင်၂၀ကျော်ဖြင့်လည်ပတ်လျက်ရှိပါသည်။
          ဖော်ပြပါအဖွဲ့ဝင်များမှာလဝန်းရောင်ခြည်၏ဘဏ္ဍာရေးအဖွဲ့ဖြစ်ပါသည်။
        </Text>
        <Square>
          <SquareOne></SquareOne>
          <SquareTwo></SquareTwo>
          <SquareThree></SquareThree>
          <SquareFour></SquareFour>
        </Square>
      </Body>
      <BottomContainer>
        <TextFooter>လဝန်းရောင်ခြည် မူပိုင်ခွင့်/၂၀၂၂</TextFooter>
        <TextFooter>
          Design & Developed By
          <NameLink href={nyanLinTunFbLink}>Nyan Lin Tun</NameLink>
        </TextFooter>
      </BottomContainer>
    </Container>
  );
};

export default MemberFooter;
