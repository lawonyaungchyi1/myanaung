import styled from "styled-components";

export const OverlayContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseContainer = styled.div`
  color: #ff8800;
  position: absolute;
  bottom: 10%;
  cursor: pointer;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  color: #ff8800;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 10%;
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: bolder;
  color: #ff8800;
`;

export const LogoutContainer = styled.div``;
export const Text = styled.div`
  color: #ff8800;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
`;
