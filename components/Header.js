import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import style from "../styles/Header.module.css";
import { useState } from "react";
import Head from "next/head";
import SecondaryBtn from "./SecondaryBtn";
// import '../pages/signin/SignIn.js'

const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: -1px 6px 15px -12px rgba(0, 0, 0, 0.75);
  // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
  //   rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  position: sticky;
  z-index: 100;
  height: 90px;
  top: 0;
`;

const Logo = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
`;

const Wrapper = styled.div`
  height: 100%;
  // display: flex;
  justify-content: space-between;
  // padding: 20px 0;
`;

// --------style the link part-----------
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

// ---------nav part style======
const StyleNav = styled.nav`
  display: flex;
  gap: 20px;
`;

// ---------main page-----------------
export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <nav className={style.nav}>
            <div className={style.logo}>
              <img
                src="https://www.etechcube.com/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-color_logo_transparent-1-1-1.png"
                width={100}
                height={30}
              />
            </div>
            <ul
              className={`${style.menuList}  ${
                isMenuOpen ? style.show : style.not
              } `}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about/About">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/AllProducts">Product</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <SecondaryBtn 
                to="/signin/SignIn"
                borderRadius='50px'
                >Sign In</SecondaryBtn>
              </li>
            </ul>

            <div
              className={style.menuIcon}
              onClick={() => {
                toggleMenu();
              }}
            >
              ☰
            </div>
          </nav>
        </Wrapper>
      </StyledHeader>
    </>
  );
};
