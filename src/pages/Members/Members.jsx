import {
  Container,
  Title,
  MemberContainer,
  MemberCard,
  MemberImage,
  MemberName,
  MemberFbAccount,
  MemberRank,
  TitleContainer,
  AnimateRectangle,
} from "./Members-styles";
import { Facebook } from "@mui/icons-material";
import { members } from "../../Data/Members";
import MemberFooter from "../../components/MemberFooter/MemberFooter";
import React from "react";
import { memberContainerVariants } from "./Members-keyframe";

const Members = () => {
  return (
    <Container
      variants={memberContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <TitleContainer>
        <Title>အဖွဲ့ဝင်များနဲ့တွေ့ဆုံလိုက်ပါ။</Title>
        <AnimateRectangle></AnimateRectangle>
      </TitleContainer>
      <MemberContainer>
        {members.map((member) => (
          <MemberCard key={member.id}>
            <MemberImage src={member.imageLink} />
            <MemberName>{member.name}</MemberName>
            <MemberRank>{member.rank}</MemberRank>
            <MemberFbAccount href={member.fbAccount}>
              <Facebook />
            </MemberFbAccount>
          </MemberCard>
        ))}
      </MemberContainer>
      <MemberFooter />
    </Container>
  );
};

export default Members;
