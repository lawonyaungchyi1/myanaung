import { Container } from "./Post-styles";
import CenterPosts from "./../../components/CenterPosts/CenterPosts";
import LeftPosts from "../../components/LeftPosts/LeftPosts";
import RightPosts from "./../../components/RightPosts/RightPosts";
import React from "react";
import { postContainerVariants } from "./Post-keyframes";

const Post = ({ user, currentUser }) => {
  return (
    <Container
      variants={postContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <LeftPosts />
      <CenterPosts currentUser={currentUser} user={user} />
      <RightPosts />
    </Container>
  );
};

export default Post;
