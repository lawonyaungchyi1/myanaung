import {
  Container,
  Posts,
  Title,
  SyncLoaderContainer,
  WarnTextContainer,
  WarnText,
} from "./CenterPosts-styles";
import Post from "./../Post/Post";
import { useState, useEffect } from "react";
import React from "react";
import ToPost from "../ToPostContainer/ToPost";
import { SyncLoader } from "react-spinners";
import { adminId, color } from "../../Data/Materials";
import { axiosInstance } from "./../../config";
import { useSelector } from "react-redux";

const CenterPosts = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState("true");
  useEffect(() => {
    const abortCont = new AbortController();
    const fetchPosts = async () => {
      await axiosInstance
        .get(`api/posts/timeline/${adminId}`, {
          signal: abortCont.signal,
        })
        .then((res) => {
          setPosts(res.data);
          setLoading("false");
        })
        .catch((err) => {
          console.log("AbortedError", err);
        });
    };
    fetchPosts();
    return () => abortCont.abort();
  }, []);

  return (
    <Container>
      <Posts>
        {currentUser._id === adminId && <ToPost user={currentUser._id} />}
        <Title>လဝန်းရောင်ခြည်ပို့စ်များ</Title>
        <SyncLoaderContainer loading={loading}>
          <SyncLoader loading={loading} color={color} />
        </SyncLoaderContainer>
        {loading === "false" && posts.length === 0 ? (
          <WarnTextContainer>
            <WarnText>ပို.(စ်)မရှိပါ။</WarnText>
          </WarnTextContainer>
        ) : (
          posts.map((post) => <Post post={post} key={post._id} />)
        )}
      </Posts>
    </Container>
  );
};

export default CenterPosts;
