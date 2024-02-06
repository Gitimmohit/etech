import styled from "styled-components";
import Center from "./Center";
import Image from "next/image";
// import main from "../styles/svg/main.mp4";

const MiddleDiv = styled.div`
  height: 200px;
`;
const NewVideo = styled.video`
  height: 100%;
  border-radius: 10px;
  width: 100%;
`;


export const PhotoMiddle = () => {
  return (
    <MiddleDiv>
      <Center>
      <NewVideo autoPlay muted src='/main.mp4'></NewVideo>
      </Center>
    </MiddleDiv>
  );
};
