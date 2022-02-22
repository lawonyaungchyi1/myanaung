import { css } from "styled-components";

//Responsive for Galxy Fold
export const glaxyFold = (props) => {
  return css`
    @media only screen and (max-width: 300px) {
      ${props}
    } ;
  `;
};
//Responsive for IPhone XR
export const iphoneXr = (props) => {
  return css`
    @media only screen and (max-width: 431px) {
      ${props}
    } ;
  `;
};

//Responsive for surface Pro7
export const surfacePro7 = (props) => {
  return css`
    @media (min-width: 700px) and (max-width: 913px) {
      ${props}
    } ;
  `;
};

//Responsive for surface Duo
export const surfaceDuo = (props) => {
  return css`
    @media (min-width: 431px) and (max-width: 700px) {
      ${props}
    } ;
  `;
};
