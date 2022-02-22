import styled from "styled-components";

export const ToPostContainer = styled.form`
  width: 90%;
  margin: 0 auto;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40%;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  with: 40px;
  height: 40px;
  object-fit: cover;
`;

export const Input = styled.input`
  width: 70%;
  border-radius: 8px;
  border: 2px solid #ffc300;
  outline: none;
  padding: 4px;
`;

export const LineBreak = styled.hr`
  height: 3px;
  background-color: #ffb700;
`;

export const FooterContainer = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const VideoContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffb700;
  cursor: pointer;
`;

export const ShareContainer = styled.div``;

export const ShareButton = styled.button`
  cursor: pointer;
  background-color: #ffb300;
  border: none;
  outline: none;
  width: 80px;
  border-radius: 8px;
`;

export const Text = styled.div``;

export const InputFile = styled.input`
  display: none;
`;
