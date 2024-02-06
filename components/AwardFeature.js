import React from "react";
import styled from "styled-components";
import style from "../styles/AwardFeature.module.css";

const Award = styled.div`
`;

const CenterDiv = styled.div`
`;

const AwardFeature = ({ src, first, second,alt,width,height }) => {
  return (
    <Award className={style.award}>
      <CenterDiv className={style.CenterDiv}>

        <div style={{minBlockSize: "50%",justifyContent:"center",minHeight:"80px",maxHeight:"80px" }}>
        <img src={src} alt={alt} width={width} height={height} />
        </div>

        <div className={style.CenterDivcontent}>
          <span>{first}</span>
        </div>

        <div className={style.content_two}>
          <span>{second}</span>
        </div>
        
      </CenterDiv>
    </Award>
  );
};

export default AwardFeature;
