import { item } from "./Register-keyframes";
import {
  DisplaySlicedText,
  WrapperText,
  DisplaySlicedTextContainer,
} from "./Register-styles";

const Wrapper = ({ children }) => <WrapperText>{children}</WrapperText>;
const AnimatedCharacters = ({ children }) => {
  //Split each word into an array
  const splitWords = children.split(" ");
  //Create storage array
  const words = [];
  //   push each words into words array
  //  , is index
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  //Add a space to the indivitual index of words
  words.map((word) => word.push("\u00A0"));

  return (
    <>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <DisplaySlicedTextContainer key={index}>
                  <DisplaySlicedText variants={item}>
                    {element}
                  </DisplaySlicedText>
                </DisplaySlicedTextContainer>
              );
            })}
          </Wrapper>
        );
      })}
    </>
  );
};

export default AnimatedCharacters;
