import styled from "styled-components";

export const Container = styled.div`
position: relative;
background-color: black;
width:304px;
height:462px;
display: flex;
flex-direction: column;
gap: 15px;

#icon{
    position: absolute;
    top: 0;
    right: 0;
    margin:16px;
    cursor: pointer;
    
}
#img{
    width:176px;
    height:176px; 
    align-self:center;
    margin-top:24px;

}
#img img{
    width: 176px;
    height: 176px;

}
>h3{
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    align-self: center;
   
}
>span{
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: smaller;
    text-align: center;
    width: 256px;
    height: 44px;
    align-self: center;
    
}
>p{
    color: ${({theme}) => theme.COLORS.CAKE_200};
    font-size: x-large;
    align-self: center;

}
>section{
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    align-self: center;
    width: 208px;
    height: 48px;
    gap: 16px;
    

}
#btnConfirm{
width:92px;
height: 48px;
}

`;