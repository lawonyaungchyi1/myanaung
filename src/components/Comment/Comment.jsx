import {
  Container,
  CommentTextAreaContainer,
  CommentTextArea,
  Form,
  PostButtonContainer,
  PostButton,
  CommentContainer,
  CommentInfo,
  Right,
  Left,
  Photo,
  Name,
  TextOfComment,
  DeleteContainer,
} from "./Comment-styles";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { DeleteOutline } from "@mui/icons-material";
import { axiosInstance } from "./../../config";
import { useSelector } from "react-redux";

toast.configure();

const Comment = ({ post }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`api/posts/${post._id}/comment`, {
        userId: currentUser._id,
        username: currentUser.username,
        desc: comment,
      });
      window.location.reload();
      toast.success("successful", { position: toast.POSITION.TOP_CENTER });
    } catch (err) {
      toast.warn(err.response.data, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1200,
      });
    }
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`api/posts/${post._id}/comment`, {
        data: { userId: currentUser._id },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <CommentContainer>
        {post.comments.map((comment) => (
          <CommentInfo key={comment.userId}>
            {comment.userId === currentUser._id ? (
              <DeleteContainer onClick={handleDelete}>
                <DeleteOutline fontSize="medium" />
              </DeleteContainer>
            ) : null}
            <Left>
              <Photo src="https://i.ibb.co/djpzXgB/noAvator.png" />
            </Left>
            <Right>
              <Name>{comment.username}</Name>
              <TextOfComment>{comment.desc}</TextOfComment>
            </Right>
          </CommentInfo>
        ))}
      </CommentContainer>
      <CommentTextAreaContainer>
        <Form onSubmit={handleSubmit}>
          <CommentTextArea
            type="text"
            placeholder="Add your comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <PostButtonContainer>
            <PostButton type="submit">Post</PostButton>
          </PostButtonContainer>
        </Form>
      </CommentTextAreaContainer>
    </Container>
  );
};

export default Comment;
