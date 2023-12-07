import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100vw;

display: flex;
gap: 305px;
align-items: center;
justify-content: center;
 
>form{
    background: ${({theme}) => theme.COLORS.DARK_700};
    width: 476px;
    height: 621px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:32px;
    border-radius:16px ;
}
>form span{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-weight:medium;
    font-size: 32px;
}
form a{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-weight: medium;
    font-size:14px;
    
}
>.inputSign{
    outline: solid white 5px;
}

`;

