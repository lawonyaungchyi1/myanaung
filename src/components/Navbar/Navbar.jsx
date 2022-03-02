import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import {
  Container,
  LogoContainer,
  LinksContainer,
  Logo,
  Links,
  LogoutContainer,
} from "./Navbar-styles";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../Data/NavLinks";
import { formLogo } from "../../Data/Images";
import { useSelector, useDispatch } from "react-redux";
import { Login, AccountCircle, Logout } from "@mui/icons-material";
import { logout, reset } from "../../features/authSlice";
import { loginVariants, registerVariants } from "./Navbar-keyframe";

const Navbar = ({ handleOpen, open }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/myanaung");
  };
  return (
    <Container>
      <LogoContainer>
        <Link to="/myanaung">
          <Logo src={formLogo} />
        </Link>
      </LogoContainer>
      <LinksContainer>
        {user ? (
          <>
            {navLinks.map((link) => (
              <Link
                to={`${link.path}`}
                style={{ textDecoration: "none" }}
                key={link.id}
              >
                <Links>{link.name}</Links>
              </Link>
            ))}
            <LogoutContainer onClick={onLogout}>
              <Logout />
            </LogoutContainer>
          </>
        ) : (
          <LinksContainer>
            <Link to="/myanaung/login" style={{ textDecoration: "none" }}>
              <Links
                variants={loginVariants}
                initial="hidden"
                animate="visible"
              >
                <Login />
                Login
              </Links>
            </Link>
            <Link to="/myanaung/register" style={{ textDecoration: "none" }}>
              <Links
                variants={registerVariants}
                initial="hidden"
                animate="visible"
              >
                <AccountCircle />
                Register
              </Links>
            </Link>
          </LinksContainer>
        )}
      </LinksContainer>
      <Hamburger handleOpen={handleOpen} open={open} />
    </Container>
  );
};

export default Navbar;
