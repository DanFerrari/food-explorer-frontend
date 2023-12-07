import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-weight: bold;
    font-size:24px;
    cursor: pointer;


`;