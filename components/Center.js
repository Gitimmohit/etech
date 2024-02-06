import styled from "styled-components"

const StyledDiv = styled.div`
max-width:90%;
height:100%;
margin: 0 auto;
display:flex;
flex-direction:column;
padding: 0 20px;
// background:#fff;
`;

export default function Center({children}){
    return(
        <StyledDiv>{children}</StyledDiv>
    )
}