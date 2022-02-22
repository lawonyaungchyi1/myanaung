import First from "../../components/First/First";
import Second from "../../components/Second/Second";
import Third from "../../components/Third/Third";
import Fourth from "../../components/Fourth/Fourth";
import Footer from "../../components/Footer/Footer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/authSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/myanaung/login");
    }
  }, [user, navigate]);
  return (
    <>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </>
  );
};

export default Home;
