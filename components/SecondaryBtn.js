import styled from "styled-components";

const Second = styled.button`

  color: ${(col)=>col.color || '#fff'};
  padding: 10px 25px;
  // border-radius: 10px;
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.backgroundColor || "#6161FF"};
  // background-image: radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 87% at 26% 20%, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
  // box-shadow: 2px 19px 31px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;

`;
export default function SecondaryBtn({children,to,backgroundColor,color,borderRadius}){
  const handleClick = () => {
    window.location.href = to;
}

    return(
        <Second onClick={handleClick} backgroundColor={backgroundColor} color={color} borderRadius={borderRadius}>{children}</Second>
    );

}