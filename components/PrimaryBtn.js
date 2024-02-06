import styled from "styled-components";

const StyledButton = styled.button`
  padding: 2px 40px;
  text-transform: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: ${(props) => props.color || "black"};
  border-radius: 20px;
  border: ${(props) => props.border || "1px solid black"};
  font-weight: 300;
  background-color: ${(props) => props.backgroundColor || "white"};
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: ${(props) => props.textDecoration || "none"};;
  


  &:hover {
    color: blue;
    text-decoration: underline;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function PrimaryBtn({ children, to, color, backgroundColor, border,textDecoration }) {
  const handleClick = () => {
    window.location.href = to;
  };

  return (
    <StyledButton onClick={handleClick} backgroundColor={backgroundColor} color={color} border={border} textDecoration ={textDecoration}>
      {children}
    </StyledButton>
  );
}
