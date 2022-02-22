import Slider from "react-slick";
import { messages } from "./../../Data/MessageData";
import {
  MessageContainer,
  Body,
  Img,
  Footer,
  Name,
  Rank,
} from "./MessageSlide-styles";
import React from "react";
import { closeCommaImage } from "../../Data/Images";

const MessageSlide = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ffaa00",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ffaa00",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 913,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {messages.map((m) => (
          <MessageContainer key={m.id}>
            <Img src={closeCommaImage} />
            <Body>{m.message}</Body>
            <Footer>
              <Name>{m.name}</Name>
              <Rank>{m.rank}</Rank>
            </Footer>
          </MessageContainer>
        ))}
      </Slider>
    </div>
  );
};

export default MessageSlide;
