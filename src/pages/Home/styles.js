import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

>section{
    width: 1120px;
    height: 260px;
    display: flex;    
    padding: 90px 100px;
    z-index: -1;
    margin-top: 268px;

    align-items: center;
    justify-content: flex-end;
    position: relative;

    background:${({theme}) => theme.COLORS.GRADIENT_200};
   

}
>section img{
    position: absolute;
    margin-right:;
    
    width: 656px;
    height:412px;
    margin-bottom: 127px;
    margin-right: 431px;
    


}
>section div{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
    
}
>section 
>section div p:first-child{
            font-size:40px;
            font-family: 'Poppins', sans-serif;
            font-weight:500;

}
>section div p:last-child{
            font-family: 'Roboto',sans-serif;
            font-weight: 100;
            font-size:16px;

}


h2,h1,p{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
}
.mySlider{
    width: 100%;
    height: 600px; 
    
    
    padding: 0 100px;       

}

.mySlider h2{
    margin-bottom: 24px;
}

.swiper-slide{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-button-next, .swiper-button-prev{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
}

>:nth-child(3){
    margin-top:80px;
}
`;