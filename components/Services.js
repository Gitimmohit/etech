import React from "react";
import style from "../styles/Services.module.css";
import styled from "styled-components";
import Image from "next/image";

const NewVideo = styled.video`
  height: 100%;
  border-radius: 10px;
  width: 100%;
`;

const Services = ({title,src,alt,}) => {
  return (
    <div className={style.servicesfirst}>
      <div className={style.servicessecond}>{title}</div>
      <div className={style.servicesthird}>
      <Image src={src} alt={alt}
       style={{height:"100%",width:"100%",}}
       />
      </div>
    </div>
  );
};

export default Services;
