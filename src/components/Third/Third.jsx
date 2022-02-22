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

const Third = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <ImageContainer>
        <VolunteerLogo src={volunteerImage} />
      </ImageContainer>
      <TextContainer>
        <TextMain>Covid လူနာများအတွက်လည်း</TextMain>
        <TextSub>အဖွဲ့ဝင်များကVolunteerအ‌နေနဲ့ကူညီပေးနေပါတယ်</TextSub>
        <Button onClick={handleOpen}>အောက်ဆီဂျင်လှူဒါန်းရန်</Button>
        <Oxygen open={open} handleOpen={handleOpen} />
      </TextContainer>
    </Container>
  );
};

export default Third;
