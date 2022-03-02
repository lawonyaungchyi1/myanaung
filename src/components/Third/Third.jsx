import React from "react";
import { useState } from "react";
import Oxygen from "./../Oxygen/Oxygen";
import {
  Container,
  ImageContainer,
  TextContainer,
  TextMain,
  TextSub,
  VolunteerLogo,
  Button,
} from "./Third-styles";
import { volunteerImage } from "../../Data/Images";
import {
  volunteerLogoVariants,
  textContainerVariants,
} from "./Third-keyframes";
import { useInView } from "react-intersection-observer";

const Third = () => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  console.log(inView);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Container ref={ref}>
      <ImageContainer>
        <VolunteerLogo
          src={volunteerImage}
          variants={volunteerLogoVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </ImageContainer>
      <TextContainer
        variants={textContainerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <TextMain>Covid လူနာများအတွက်လည်း</TextMain>
        <TextSub>အဖွဲ့ဝင်များကVolunteerအ‌နေနဲ့ကူညီပေးနေပါတယ်</TextSub>
        <Button onClick={handleOpen}>အောက်ဆီဂျင်လှူဒါန်းရန်</Button>
        <Oxygen open={open} handleOpen={handleOpen} />
      </TextContainer>
    </Container>
  );
};

export default Third;
