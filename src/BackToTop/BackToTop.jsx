import React, { useState, useEffect } from "react";
import { ExpandLess } from "@mui/icons-material";
import { useWindowScroll } from "react-use";
import {
  ToTopButton,
  ToTopButtonContainer,
  expandLessZIndex,
} from "./BackToTop-styles";

const BackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 200) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visibility) {
    return false;
  }

  return (
    <ToTopButtonContainer style={expandLessZIndex}>
      <ToTopButton onClick={scrollToTop}>
        <ExpandLess />
      </ToTopButton>
    </ToTopButtonContainer>
  );
};

export default BackToTop;
