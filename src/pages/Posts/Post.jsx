import { Container } from "./Post-styles";
import CenterPosts from "./../../components/CenterPosts/CenterPosts";
import LeftPosts from "../../components/LeftPosts/LeftPosts";
import RightPosts from "./../../components/RightPosts/RightPosts";
import React from "react";

const Post = ({ user, currentUser }) => {
  return (
    <Container>
      <LeftPosts />
      <CenterPosts currentUser={currentUser} user={user} />
      <RightPosts />
    </Container>
  );
};

export default Post;
