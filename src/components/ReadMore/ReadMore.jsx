import React from "react";
import { Container, Button } from "./ReadMore-styles";
import { useState } from "react";

const ReadMore = ({ children }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const text = children;

  const resultString = isTruncated ? text.slice(0, 200) : text;

  const toggleTruncated = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <Container>
      {resultString}
      {isTruncated && text.length >= "200" ? "..." : null}
      {text.length >= "200" && (
        <Button onClick={toggleTruncated}>
          {isTruncated ? "See More" : "See Less"}
        </Button>
      )}
    </Container>
  );
};

export default ReadMore;
