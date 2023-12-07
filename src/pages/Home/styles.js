import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

section{
    width: 1120px;
    height: 260px;
    display: flex;    
    padding: 90px 100px;
  
    margin-top: 268px;

    align-items: center;
    justify-content: flex-end;
    position: relative;

    background:${({theme}) => theme.COLORS.GRADIENT_200};
   

}
section img{
    position: absolute;
    margin-right:;
    
    width: 656px;
    height:412px;
    margin-bottom: 127px;
    margin-right: 431px;
    


}
section div{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
    
}
section div p:first-child{
            font-size:40px;
            font-family: 'Poppins', sans-serif;
            font-weight:500;

}
section div p:last-child{
            font-family: 'Roboto',sans-serif;
            font-weight: 100;
            font-size:16px;

}


>h2,h1,p{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
}

`;