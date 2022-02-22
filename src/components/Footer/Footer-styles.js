import styled from "styled-components";
import { iphoneXr, surfacePro7, surfaceDuo } from "./../Responsive/responsive";

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  position: relative;
  ${iphoneXr({
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
    height: "100vh",
  })};
  ${surfacePro7({
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "40vh",
    marginTop: "10%",
  })}
  ${surfaceDuo({
    display: "flex",
  })}
`;

export const Left = styled.div`
  margin-top: 10%;
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  position: relative;
  ${iphoneXr({
    margin: "0",
    width: "100%",
    marginBottom: "10%",
    height: "50%",
  })};
  ${surfacePro7({
    margin: "0",
    width: "100%",
    justifyContent: "center",
    height: "100%",
  })}
  ${surfaceDuo({
    width: "100%",
    height: "100%",
    marginBottom: "8%",
  })}
`;

export const InvitationText = styled.div`
  position: relative;
  ${iphoneXr({ fontSize: "8px", width: "100%" })};
  ${surfaceDuo({ fontSize: "12px", width: "100%" })};
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${iphoneXr({ width: "200px", flex: 1 })}
`;

export const ToContact = styled.h3`
  font-size: 30px;
  color: #ffb300;
  ${iphoneXr({ fontSize: "16px" })}
  ${surfacePro7({ fontSize: "22px" })}
  ${surfaceDuo({ fontSize: "18px" })}
`;

export const Address = styled.div`
  height: 50px;
  ${iphoneXr({
    fontSize: "8px",
    height: "20px",
    width: "100%",
  })};
  ${surfacePro7({
    fontSize: "14px",
    height: "35px",
    width: "100%",
  })}
  ${surfaceDuo({
    fontSize: "12px",
    height: "20px",
    width: "100%",
  })}
`;

export const Email = styled.div`
  height: 50px;
  ${iphoneXr({ fontSize: "8px", height: "20px", marginTop: "14px" })};
  ${surfacePro7({
    fontSize: "12px",
    height: "35px",
    width: "100%",
  })}
  ${surfaceDuo({
    fontSize: "12px",
    height: "20px",
    width: "100%",
  })}
`;

export const Phone = styled.div`
  height: 50px;
  ${iphoneXr({ fontSize: "8px", height: "20px" })};
  ${surfacePro7({
    fontSize: "14px",
    height: "35px",
    width: "100%",
  })}
  ${surfaceDuo({
    fontSize: "12px",
    height: "20px",
    width: "100%",
  })}
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${iphoneXr({ width: "100%", height: "50%" })};
  ${surfacePro7({ width: "50%", height: "100%" })}
  ${surfaceDuo({ height: "50%", width: "100%" })}
`;
export const LocationOnMap = styled.h3`
  font-size: 40px;
  margin-bottom: 10px;
  color: #ffb300;
  ${iphoneXr({ fontSize: "20px" })};
  ${iphoneXr({ fontSize: "14px" })};
  ${surfacePro7({ fontSize: "18px" })}
  ${surfaceDuo({ fontSize: "16px" })}
`;

export const FoundationYear = styled.div`
  margin-top: 20px;
  ${iphoneXr({ fontSize: "8px", width: "200px" })};
  ${surfacePro7({ marginTop: "10px" })}
  ${surfaceDuo({
    fontSize: "12px",
    height: "20px",
    width: "100%",
    margin: "0 auto",
  })}
`;

export const Invitation = styled.div`
  margin-top: 20px;
  color: #ffb300;
  font-size: 20px;
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${iphoneXr({
    fontSize: "14px",
    width: "100%",
    padding: "0px",
  })};
  ${surfacePro7({
    fontSize: "14px",
  })}
  ${surfaceDuo({
    fontSize: "12px",
    width: "100%",
    margin: "0",
  })}
`;

export const LineBreak = styled.hr`
  width: 400px;
  border: 1px solid #ffb300;
  color: #ffb300;
  ${iphoneXr({ width: "200px" })};
  ${surfacePro7({ width: "300px" })}
`;

export const Map = styled.div`
  width: 500px;
  height: 450px;
  border: 2px solid #ffb300;
  border-radius: 20px;
  z-index: 1;
  ${iphoneXr({ width: "100%", height: "100%" })};
  ${surfacePro7({ width: "100%", height: "300px" })}
  ${surfaceDuo({ width: "100%" })}
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid whitesmoke;
  ${iphoneXr({ height: "10%", position: "relative" })};
  ${surfacePro7({
    height: "20%",
    position: "relative",
  })}
  ${surfaceDuo({
    height: "5%",
    bottom: "0",
  })}
`;

export const Text = styled.div`
  ${iphoneXr({ fontSize: "8px" })}
  ${surfaceDuo({ fontSize: "12px" })}
`;

export const FbLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  ${iphoneXr({ justifyContent: "flex-start", alignItems: "center" })}
  ${surfaceDuo({
    fontSize: "12px",
    marginTop: "10px",
  })}
`;

export const Logo = styled.div`
  color: #0572e6;
`;

export const FbText = styled.a`
  color: #ffb300;
  &:hover {
    color: #ffd000;
  }
  ${iphoneXr({ fontSize: "8px" })}
`;

export const BoldText = styled.span`
  color: #ffd000;
`;

export const Open = styled.img`
  width: 50px;
  position: absolute;
  top: -10%;
  left: -14%;
  ${iphoneXr({ left: "-6%", top: "-16%", width: "20px" })};
  ${surfacePro7({ left: "-10%", top: "-20%", width: "30px" })}
  ${surfaceDuo({ left: "-4%", top: "-14%", width: "22px" })}
`;

export const Close = styled.img`
  width: 50px;
  position: absolute;
  bottom: 12%;
  right: -12%;
  ${iphoneXr({ right: "50%", bottom: "16%", width: "20px" })};
  ${surfacePro7({ right: "-13%", bottom: "16%", width: "30px" })}
  ${surfaceDuo({ right: "52%", bottom: "18%", width: "22px" })}
`;

export const NameLink = styled.a`
  font-size: 20px;
  color: #ffc300;
  margin-left: 10px;
  ${iphoneXr({ fontSize: "8px" })}
  ${surfacePro7({ fontSize: "14px" })}
  ${surfaceDuo({ fontSize: "12px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${iphoneXr({
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "90%",
  })}
  ${surfacePro7({
    height: "80%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: "5%",
  })};
  ${surfaceDuo({
    height: "80%",
    display: "flex",
    flexDirection: "column-reverse",
    marginTop: "30%",
  })}
`;
