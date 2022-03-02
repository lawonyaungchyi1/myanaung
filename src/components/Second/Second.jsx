import { useState } from "react";
import {
  Container,
  LogoContainer,
  TextContainer,
  TextMain,
  TextSub,
  DonationLogo,
  Button,
} from "./Second-styles";
import ModalOverlay from "../Modal/ModalOverlay";
import React from "react";
import { donationImage } from "../../Data/Images";
import { useInView } from "react-intersection-observer";
import {
  donationLogoVariants,
  textContainerVariants,
} from "./Second-keyframes";

const Second = () => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.4 });

  const handleOpen = (modal) => {
    setOpen(modal);
  };

  return (
    <Container ref={ref}>
      <TextContainer
        variants={textContainerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <TextMain>လဝန်းရောင်ခြည်အသင်းမှ</TextMain>
        <TextSub>
          Covid 19ကာလအတွင်းနွမ်းပါးပြည်သူများအား
          <br />
          အစားအသောက်နှင့် ဆေးဝါးများကိုလှူဒါန်းပေးနေပါသည်။
        </TextSub>
        <Button onClick={() => handleOpen(true)}>ပါဝင်ကူညီရန်</Button>
      </TextContainer>
      <LogoContainer>
        <DonationLogo
          src={donationImage}
          variants={donationLogoVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </LogoContainer>
      <ModalOverlay open={open} handleOpen={handleOpen} />
    </Container>
  );
};

export default Second;
