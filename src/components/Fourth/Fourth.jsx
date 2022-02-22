import React from "react";
import MessageSlide from "../Slider/MessageSlide";
import {
  Container,
  SliderContainer,
  TitleContainer,
  Title,
} from "./Fourth-styles";

const Fourth = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>ခံယူချက်များ</Title>
      </TitleContainer>
      <SliderContainer>
        <MessageSlide />
      </SliderContainer>
    </Container>
  );
};

export default Fourth;
