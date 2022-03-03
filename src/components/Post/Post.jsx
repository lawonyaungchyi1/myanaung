import {
  Container,
  UserInfoDiv,
  PostBody,
  PostFooter,
  ImageContainer,
  Image,
  NameAndDateContainer,
  Name,
  Date,
  LineBreak,
  DescContainer,
  PostImageContainer,
  PostImage,
  LikeContainer,
  HeartContainer,
  CountContainer,
  Count,
  Text,
  CommentContainer,
  DeleteContainer,
  CommentCountContainer,
  CommentCount,
  CountNumberContainer,
} from "./Post-styles";
import {
  ThumbUp,
  ThumbUpOutlined,
  FavoriteBorderOutlined,
  ChatBubbleOutlineOutlined,
  ChatBubble,
  DeleteOutline,
} from "@mui/icons-material";
import React from "react";
import Comment from "./../Comment/Comment";
import { useState, useEffect } from "react";
import ReadMore from "../ReadMore/ReadMore";
import { format } from "timeago.js";
import { loginFormLogo } from "../../Data/Images";
import { axiosInstance } from "./../../config";
import { useSelector } from "react-redux";
import { adminId } from "../../Data/Materials";

const Post = ({ post }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const [user, setUser] = useState({});

  const handleLike = async () => {
    try {
      await axiosInstance.put(`api/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLikeCount(isLike ? likeCount - 1 : likeCount + 1);
    setIsLike(!isLike);
  };

  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const abortCont = new AbortController();
    try {
      const fetchUser = async () => {
        await axiosInstance
          .get(`api/users/${post.userId}`, {
            signal: abortCont.signal,
          })
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            console.log("AbortError", err);
          });
      };
      fetchUser();
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Fetch Aborted");
      }
    }

    return () => abortCont.abort();
  }, [post.userId]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`api/posts/${post._id}/post`, {
        data: { userId: adminId },
      });
      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <Container>
      <UserInfoDiv>
        <ImageContainer>
          <Image
            src={user.profilePicture ? user.profilePicture : loginFormLogo}
          />
        </ImageContainer>
        <NameAndDateContainer>
          <Name>{user.username}</Name>
          <Date>{format(post.createdAt)}</Date>
        </NameAndDateContainer>
        {currentUser._id === adminId && (
          <DeleteContainer onClick={handleDelete}>
            <DeleteOutline />
          </DeleteContainer>
        )}
      </UserInfoDiv>
      <LineBreak />
      <PostBody>
        <DescContainer>
          <ReadMore>{post.desc}</ReadMore>
        </DescContainer>
        <PostImageContainer image={post.image}>
          <PostImage src={post.image ? post.image : null} />
        </PostImageContainer>
      </PostBody>
      <LineBreak />
      <CountNumberContainer>
        <CountContainer>
          <Count>
            {likeCount}
            {likeCount < 2 ? "like" : "likes"}
          </Count>
        </CountContainer>
        <CommentCountContainer>
          <CommentCount>
            {post.comments.length}
            {post.comments.length < 2 ? "comment" : "comments"}
          </CommentCount>
        </CommentCountContainer>
      </CountNumberContainer>
      <PostFooter>
        <LikeContainer onClick={handleLike}>
          {isLike ? (
            <ThumbUp fontSize="medium" />
          ) : (
            <ThumbUpOutlined fontSize="medium" />
          )}
          <Text>Like</Text>
        </LikeContainer>
        <HeartContainer>
          <FavoriteBorderOutlined fontSize="medium" />
          <Text>Love</Text>
        </HeartContainer>
        <CommentContainer onClick={handleOpen}>
          {isOpen ? (
            <ChatBubble fontSize="medium" />
          ) : (
            <ChatBubbleOutlineOutlined fontSize="medium" />
          )}
          <Text>Comment</Text>
        </CommentContainer>
      </PostFooter>
      {isOpen && <Comment post={post} />}
    </Container>
  );
};

export default Post;
