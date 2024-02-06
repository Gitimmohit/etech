import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
const Bg = styled.div`
  // background-color: #fff;
  color: black;
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  padding: 20px; /* Adjust the padding as needed */
  box-sizing: border-box;
  z-index: 1; /* Adjust the z-index as needed */
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  padding-top: 50px;
`;

const Paragraph = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperButton = styled.div`
  display: flex;
  gap: 5px;
`;

const NewVideo = styled.video`
  width: 100%;
  // border-radius: 10px;
  box-shadow: #a0e9ff 0px 7px 29px 0px;
`;

const Top = styled.div`
  width: 100%;
  position: relative;
`;

export default function Cart() {
  return (
    <>
      <Top>
        <NewVideo
          autoPlay
          loop
          muted
          src="https://www.etechcube.com/wp-content/uploads/2021/07/Add-a-heading_2-1.mp4"
        ></NewVideo>       
      </Top>
    </>
  );
}
