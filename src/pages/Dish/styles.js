import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;


>a{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-weight: bold;
    font-size:24px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 106px;    
    align-self: flex-start;
    margin-left:122px;
   
    margin-top:128px;
}
.container{
    width: 100vw;
    margin-top:42px;
    display: flex;
    gap: 41px;
    align-items: center;
    justify-content: center;
    
    
}
.content{
    width: 687px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
p{
    font-family: 'Poppins', sans-serif;  
  outline: none;
    font-size: 24px;
    font-weight: normal;

   
}
#tags{
    display: flex;
    align-items: center;
    flex-direction:center;
    gap:12px;
}

#tags span{
    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    border-radius:5px;
    padding: 8px;
    text-align: center;
}
.confirm{
    display: flex;
    align-items: center;
    gap: 33px;
    margin-top: 24px;
    


}
#btnIncluir{
    width:162px;

}
`;
