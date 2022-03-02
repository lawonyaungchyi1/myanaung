import First from "../../components/First/First";
import Second from "../../components/Second/Second";
import Third from "../../components/Third/Third";
import Fourth from "../../components/Fourth/Fourth";
import Footer from "../../components/Footer/Footer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "./Home-styles";
import { homeVariants } from "./Home-keyframes";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/myanaung/login");
    }
  }, [user, navigate]);
  return (
    <Container
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </Container>
  );
};

export default Home;
