import React from "react";
import styled from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";
import uparrow from "../styles/images/uparrow.png";
import style from "../styles/VideoComponent.module.css";

const Video = styled.div`
`;

const NewVideo = styled.video`
  height: 100%;
  border-radius: 10px;
  width: 100%;
`;

const VideoComponent = ({ first, percentage, second, third,url,to }) => {
  return (
    <Video className={style.video}>
      <div className={style.videofirst}>

        <div className={style.firstone}>
          <span>{first}</span>
        </div>

        <div className={style.middle}>

          <span
            style={{
              display: "block",
              color: "#6161FF",
              fontWeight: "bold",
            }}
          >
            <Image src={uparrow} alt="Logo" width={40} height={60} />
            {percentage}
          </span>

          <span className={style.secondspan}
            style={{ display: "block", marginTop: "10px", }}
          >
            {second}
          </span>

          <span className={style.secondspan}
          style={{ display: "block"}}>{third}</span>
          
        </div>
        <div
          style={{
            // border: "2px solid red",
            width: "100%",
            height: "20%",
            textAlign: "justify",
          }}
        >
          <PrimaryBtn to="/AllProducts">Learn More</PrimaryBtn>
        </div>
      </div>
      <div className={style.playerwrapper}>
        <iframe
          width="100%"
          height="100%"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; 
         autoplay; clipboard-write;
          encrypted-media; 
          gyroscope;
           picture-in-picture;
            web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Video>
  );
};

export default VideoComponent;
