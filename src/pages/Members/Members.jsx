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

const Members = () => {
  return (
    <Container>
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
