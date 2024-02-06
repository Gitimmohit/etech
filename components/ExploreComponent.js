import React from "react";
import styled from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import style from "../styles/ExploreComponent.module.css";

const Video = styled.div``;

const ExploreComponent = ({ src, alt, width, height, contents }) => {
  return (
    <Video className={style.Video}>
      <div className={style.videoCenter}>
        <div className={style.videotop}>
          <img src={src} alt={alt} width={width} height={height} />
        </div>
        <div className={style.videomiddle}>
          <span
            style={{
              display: "block",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {contents}
          </span>
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",
            textAlign: "justify",
          }}
        >
          <PrimaryBtn to="/AllProducts">Learn More</PrimaryBtn>
        </div>
      </div>
    </Video>
  );
};

export default ExploreComponent;
