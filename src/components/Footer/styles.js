import styled from "styled-components";

export const Container =  styled.div`
width: 100%;
height: 77px;
background: ${({theme}) => theme.COLORS.DARK_600};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 121px;


.logo span{
    color: ${({theme}) => theme.COLORS.LIGHT_700};
}
.logo path{
    fill: ${({theme}) => theme.COLORS.LIGHT_700}; 
}
> span{
    color: ${({theme}) => theme.COLORS.LIGHT_200};
}

`;