import styled from "styled-components";
import {
  iphoneXr,
  surfaceDuo,
  surfacePro7,
} from "../../components/Responsive/responsive";

export const Container = styled.div`
  width: 100%;
`;

export const ThankTextContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: bolder;
  color: #ff9500;
  margin-top: 10%;
`;

export const ThankText = styled.div`
  margin-bottom: 20px;
  ${iphoneXr({
    marginBottom: "20px",
    fontSize: "16px",
    width: "90%",
    margin: "10% auto",
    overflowWrap: "break-word",
  })}
  ${surfacePro7({
    fontSize: "18px",
    overflowWrap: "break-word",
  })}
    ${surfaceDuo({ fontSize: "14px", overflowWrap: "break-word" })}
`;

export const NameContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${iphoneXr({ width: "90%", margin: "0 auto" })}
`;

export const Name = styled.div`
  font-size: 20px;
  color: #ff9500;
  ${iphoneXr({ fontSize: "12px" })}
  ${surfacePro7({
    fontSize: "14px",
  })}
    ${surfaceDuo({ fontSize: "14px", overflowWrap: "break-word" })}
`;
export const Rank = styled.div`
  font-size: 20px;
  color: #ff9500;
  ${iphoneXr({ fontSize: "12px" })}
  ${surfacePro7({
    fontSize: "14px",
  })}
    ${surfaceDuo({ fontSize: "14px", overflowWrap: "break-word" })}
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bolder;
  color: #ff7b00;
  ${iphoneXr({ fontSize: "18px" })}
  ${surfaceDuo({ fontSize: "14px", overflowWrap: "break-word" })}
`;

export const NumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 75vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff8800;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  scrollbar-width: thin;
  scrollbar-color: #ff8800 white;
  ${iphoneXr({ height: "80vh" })}
`;

export const ContactNumberContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const ContactNumber = styled.div`
  position: relative;
  width: 20%;
  margin: 2.5%;
  height: 200px;
  border: 1px solid #ff8800;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ${iphoneXr({ width: "46%", margin: "1%" })}
  ${surfaceDuo({ width: "180px" })}
`;

export const ContactName = styled.span`
  text-transform: capitalize;
  ${surfaceDuo({ fontSize: "12px", overflowWrap: "break-word" })}
`;

export const PhoneNumber = styled.div`
  ${surfaceDuo({ fontSize: "12px", overflowWrap: "break-word" })}
`;

export const DeleteContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
