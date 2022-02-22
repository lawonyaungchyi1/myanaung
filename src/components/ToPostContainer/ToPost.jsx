import React, { useRef, useState } from "react";
import {
  ToPostContainer,
  ProfileContainer,
  ImageContainer,
  Image,
  Input,
  LineBreak,
  FooterContainer,
  VideoContainer,
  ShareContainer,
  ShareButton,
  Text,
  InputFile,
} from "./ToPost-styles";
import { CollectionsOutlined } from "@mui/icons-material";
import { db } from "../../firebase.config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { axiosInstance } from "./../../config";

toast.configure();

const ToPost = ({ user }) => {
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const handleFiles = (e) => {
    const file = e.target.files[0];
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${user}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                toast.info("ခဏစောင့်ပေးပါခင်ဗျ....", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 1300,
                });
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setFile(downloadURL);
              setIsFetched(true);
              toast.success("ပို့စ်တင်လို့ရပါပြီ...", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
              });
            });
          }
        );
      });
    };

    storeImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        userId: user,
        desc: desc.current.value,
        image: file,
      };
      await axiosInstance.post("api/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ToPostContainer onSubmit={handleSubmit}>
        <ProfileContainer>
          <ImageContainer>
            <Image src="https://i.ibb.co/4RhMTq9/form-logo.png" />
          </ImageContainer>
          <Input
            type="text"
            placeholder="What's on your mind , Nyan?"
            ref={desc}
          />
        </ProfileContainer>
        <LineBreak />
        <FooterContainer>
          <VideoContainer htmlFor="file">
            <CollectionsOutlined fontSize="medium" />
            <Text>Photos</Text>
            <InputFile
              type="file"
              id="file"
              accept=".png , .jpeg , .jpg"
              onChange={handleFiles}
            />
          </VideoContainer>
          <ShareContainer>
            <ShareButton type="submit" disabled={isFetched ? false : true}>
              Share
            </ShareButton>
          </ShareContainer>
        </FooterContainer>
      </ToPostContainer>
    </>
  );
};

export default ToPost;
