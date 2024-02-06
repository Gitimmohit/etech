import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SecondaryBtn from "./SecondaryBtn";
import Center from "./Center";
import logo from "../styles/images/right.png";
import style from "../styles/Brand.module.css";
import PrimaryBtn from "./PrimaryBtn";
import Link from "next/link";

const ProductComponent = ({
  src,
  alt,
  width,
  height,
  firstDiscription,
  shortDiscription,
  firstUseCase,
  secondUseCase,
  thirdUseCase,
  fourUseCase,
}) => {
  return (
    <div className={style.myBox}>
      <div
        style={{
          maxHeight:"50%",
          minHeight:"50%",
          height: "auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            marginBottom: "4px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <Image src={src} alt={alt} width={width} height={height} />
            <span style={{ display: "block" }}>{firstDiscription}</span>
          </div>
          <div>
            <span>{shortDiscription}</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(166deg, rgba(3,1,48,1) 0%, rgba(58,48,174,1) 0%, rgba(29,58,172,1) 9%, rgba(22,95,172,1) 24%, rgba(17,125,172,1) 35%, rgba(17,170,201,1) 46%, rgba(17,170,201,1) 49%, rgba(17,170,201,1) 54%, rgba(179,211,218,1) 69%, rgba(179,211,218,1) 77%, rgba(194,218,223,1) 90%)",
          }}
        ></div>
      </div>
      <div
        style={{
          height: "auto",
          marginTop: "2px",
        }}
      >
        <span>Top use cases:</span>
        <span style={{ display: "block" }}>
          <Image src={logo} alt="Logo" width={20} height={20} />
          {firstUseCase}
        </span>
        <span style={{ display: "block" }}>
          <Image src={logo} alt="Logo" width={20} height={20} />
          {secondUseCase}
        </span>
        <span style={{ display: "block" }}>
          <Image src={logo} alt="Logo" width={20} height={20} />
          {thirdUseCase}
        </span>
        <span style={{ display: "block" }}>
          <Image src={logo} alt="Logo" width={20} height={20} />
          {fourUseCase}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <span style={{ display: "block" }}>
          <SecondaryBtn to="/AllProducts">Get Started</SecondaryBtn>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2px",
        }}
      >
        <span style={{ display: "block" }}>
          <PrimaryBtn to="/AllProducts">Learn More</PrimaryBtn>
        </span>
      </div>
    </div>
  );
};

export default ProductComponent;
