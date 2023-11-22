import styled from "styled-components";

export const Container = styled.div`
width: 100px;
height: 32px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

>span{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-weight:bold;
    font-size: x-large;
    
}

#decrease{
  border:none ;
  background: transparent;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-weight: normal;
  font-size: x-large;
  width:24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

}

#increase{
  border:none ;
  background: transparent;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-weight:normal;
  font-size: x-large;
  width:24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

}

`;