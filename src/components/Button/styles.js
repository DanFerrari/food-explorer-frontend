import styled from "styled-components";

export const Container = styled.button`
width: 348px;
height:48px;
background-color: ${({theme}) => theme.COLORS.TOMATO_100};
border: none;
border-radius:5px;
color: ${({theme}) => theme.COLORS.LIGHT_100};
font-size:14px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;

`;