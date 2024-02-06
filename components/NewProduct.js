import styled from "styled-components";
import { useState } from "react";
import Center from "./Center";
import style from "../styles/NewProduct.module.css";

const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ borderColor }) => borderColor || "black"};
  // gap: 5px;
  height: 120px;
  border-radius: 10px;
  width: 120px;
  grid-templete-cloumns: 1fr 1fr 1fr;
  &hover:border:1px solid yellow;
  cursor: pointer;
  &:hover {
      box-shadow: 0px 0px 15px -8px rgba(0,0,0,1);
    border-color: ${({ hoverColor }) => hoverColor || "white"};
  }
`;

const Centerdiv = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content:center;
  display: grid;
  column-gap: 10px;
  // row-gap: 10px;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  padding: 20px;
  overflow-x: auto;
  // overflow-x: hidden;
`;

const ParacenterDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  // font-size: 50px;
`;
const Paracenter = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  // font-size: 50px;
`;

const Lastpara = styled.div`
  display: flex;
  justify-content: center;
`;
export default function NewProduct({ name }) {
  const [isChecked, setChecked] = useState(false);
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [four, setfour] = useState(false);
  const [five, setfive] = useState(false);
  const [six, setsix] = useState(false);
  const [seven, setseven] = useState(false);
  const handleCheckboxChange = (namecheck) => {
    if (namecheck === "first") {
      setfirst(!first);
    }
    if (namecheck === "second") {
      setsecond(!second);
    }
    if (namecheck === "third") {
      setthird(!third);
    }
    if (namecheck === "four") {
      setfour(!four);
    }
    if (namecheck === "five") {
      setfive(!five);
    }
    if (namecheck === "six") {
      setsix(!six);
    }
    if (namecheck === "seven") {
      setseven(!seven);
    } else if (namecheck === "ss") {
      setChecked(!isChecked);
    }
  };

  return (
    <Center>
      {/* paragraph data  */}
      <Center>
        <ParacenterDiv className={style.paratop}>
          A platform built for a
        </ParacenterDiv>
        <Paracenter className={style.paramiddle}>
          new way of working
        </Paracenter>
        <Lastpara className={style.Lastpara}>
          What would you like to manage?
        </Lastpara>
      </Center>

      <Centerdiv>
        {/* first product */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("ss");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                name="ss"
                checked={isChecked}
                onChange={() => {
                  handleCheckboxChange("ss");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP/tabstags+color/Creative.png"
              alt="Not Found"
              width="auto"
              height="50"
            />
          </div>

          <div
            style={{
              display: "flex",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              Creative & design
            </span>
          </div>
        </ProductGrid>

        {/* second product */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("first");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={first}
                name="first"
                onChange={() => {
                  handleCheckboxChange("first");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP/tabstags+color/ops.png"
              alt="Not Found"
              width="auto"
              height="50"
            />
          </div>

          <div
            style={{
              display: "flex",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              Operation
            </span>
          </div>
        </ProductGrid>

        {/* third product */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("second");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={second}
                name="second"
                onChange={() => {
                  handleCheckboxChange("second");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP/tabstags+color/marketing.png"
              alt="Not Found"
              width="auto"
              height="50"
            />
          </div>

          <div
            style={{
              display: "flex",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              Marketing
            </span>
          </div>
        </ProductGrid>

        {/* four product */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("third");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={third}
                name="third"
                onChange={() => {
                  handleCheckboxChange("third");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP/tabstags+color/Projects.png"
              alt="Not Found"
              width="auto"
              height="50"
            />
          </div>

          <div
            style={{
              display: "flex",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              Project management
            </span>
          </div>
        </ProductGrid>

        {/* five product */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("four");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={four}
                name="four"
                onChange={() => {
                  handleCheckboxChange("four");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP/tabstags+color/Tasks.png"
              alt="Not Found"
              width="auto"
              height="50"
            />
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              Task management
            </span>
          </div>
        </ProductGrid>

        {/* Six product */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("five");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={five}
                name="five"
                onChange={() => {
                  handleCheckboxChange("five");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP/tabstags+color/HR.png"
              alt="Not Found"
              width="auto"
              height="50"
            />
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              HR
            </span>
          </div>
        </ProductGrid>
        {/* seven product */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("six");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={six}
                name="six"
                onChange={() => {
                  handleCheckboxChange("six");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP/tabstags+color/IT.png"
              alt="Not Found"
              width="auto"
              height="50"
            />
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              IT
            </span>
          </div>
        </ProductGrid>

        {/* eight */}
        <ProductGrid
          onClick={() => {
            handleCheckboxChange("seven");
          }}
        >
          <div style={{ height: "30%", borderRadius: "10px" }}>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={seven}
                name="seven"
                onChange={() => {
                  handleCheckboxChange("seven");
                }}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP_tests/wm_icons/more.png"
              alt="Not Found"
              width="auto"
              height="40"
            />
          </div>

          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              height: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                lineHeight: "15px",
              }}
            >
              More workflows
            </span>
          </div>
        </ProductGrid>
      </Centerdiv>
    </Center>
  );
}
