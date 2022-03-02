import React from "react";
import MessageSlide from "../Slider/MessageSlide";
import { fourthContainerVariants } from "./Fourth-keyframes";
import { useInView } from "react-intersection-observer";
import {
  Container,
  SliderContainer,
  TitleContainer,
  Title,
} from "./Fourth-styles";

const Fourth = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <Container ref={ref}>
      <TitleContainer
        variants={fourthContainerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Title>ခံယူချက်များ</Title>
      </TitleContainer>
      <SliderContainer
        variants={fourthContainerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <MessageSlide />
      </SliderContainer>
    </Container>
  );
};

export default Fourth;
