import React from "react";
import {
  Container,
  AwardContainer,
  Image,
  Covid19Container,
} from "./RightPosts-styles";
import { awardImage, breakingNewsImage } from "../../Data/Images";

const RightPosts = () => {
  return (
    <Container>
      <AwardContainer>
        <Image src={awardImage} />
      </AwardContainer>
      <Covid19Container>
        <Image src={breakingNewsImage} />
      </Covid19Container>
    </Container>
  );
};

export default RightPosts;
