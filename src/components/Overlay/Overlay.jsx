import React from "react";
import {
  OverlayContainer,
  CloseContainer,
  LinkContainer,
  Links,
  TitleContainer,
  Title,
  LogoutContainer,
  Text,
} from "./Overlay-styles";
import { AccountCircle, CloseOutlined, Login } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../Data/NavLinks";
import { overlayCloseColor } from "../../Data/Materials";
import { logout, reset } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { containerVariants, linkVariants } from "./Overlay-keyframes";

const Overlay = ({ handleOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    handleOpen();
    dispatch(logout());
    dispatch(reset());
    navigate("/myanaung");
  };
  return (
    <OverlayContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <TitleContainer>
        <Title>လဝန်းရောင်ခြည်</Title>
      </TitleContainer>
      <CloseContainer onClick={handleOpen}>
        <CloseOutlined color={overlayCloseColor} />
      </CloseContainer>
      <LinkContainer>
        {user ? (
          <>
            {navLinks.map((link) => (
              <Link
                to={`${link.path}`}
                style={{ textDecoration: "none", padding: "none" }}
                key={link.id}
                onClick={handleOpen}
              >
                <Links>{link.name}</Links>
              </Link>
            ))}
            <LogoutContainer onClick={handleLogout}>
              <Text> အကောင့်မှထွက်ရန်</Text>
            </LogoutContainer>
          </>
        ) : (
          <LinkContainer variants={linkVariants}>
            <Link
              to="/myanaung/login"
              style={{ textDecoration: "none" }}
              onClick={handleOpen}
            >
              <Links>
                <Login />
                Login
              </Links>
            </Link>
            <Link
              to="/myanaung/register"
              style={{ textDecoration: "none" }}
              onClick={handleOpen}
            >
              <Links>
                <AccountCircle />
                Register
              </Links>
            </Link>
          </LinkContainer>
        )}
      </LinkContainer>
    </OverlayContainer>
  );
};

export default Overlay;
