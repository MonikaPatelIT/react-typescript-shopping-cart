import styled from "styled-components";


export const Wrapper = styled.div`
display:flex;
justify-content: space-space-between;
flex-direction: column;
width:100%;
height: 100%;
border: 1px solid gray;
border-radius: 20px;

button {
    border-radius:  0 0 20px 20px;
}

img {
    display: flex;
    align-self: center;
    max-height: 280px;
    /* width: 210px; */
    max-width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0 ;
}

div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}



`;