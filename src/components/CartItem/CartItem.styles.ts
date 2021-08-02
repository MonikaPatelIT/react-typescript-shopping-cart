import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
border-bottom: 1px solid black;
padding-bottom : 20px;

div{ 
    flex:1;
}
.information, .buttons, .productInfo {
    display: flex;
    justify-content: space-between;
}

img {
    max-width: 80px;
    height: 80px;
    padding: 1rem;
    object-fit:cover;
}
`;