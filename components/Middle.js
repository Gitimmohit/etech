import Link from "next/link";
import styled from "styled-components";
import SecondaryBtn from "./SecondaryBtn";
const Middles = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 150px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Middle = () => {
  return (
    <Middles>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
         <span style={{ display: "block" }}>
      <SecondaryBtn>Get Started</SecondaryBtn>
    </span>
    <span>No credit card needed ✦ Unlimited time on Free plan</span>
      </div>
    </Middles>
  );
};
