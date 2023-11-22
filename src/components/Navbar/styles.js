import styled from "styled-components";

export const Container = styled.div`

background-color: ${({theme}) => theme.COLORS.DARK_600};

width: 100vw;
height: 104px;
position: fixed;
top: 0;

display: flex;
align-items: center;
justify-content: center;
gap:32px;

>#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-weight: bold;
    font-size:24px;
    cursor: pointer;
}

>#input-text{
    width: 581px;
    height: 48px;
    padding: 12px 12px 12px 100px;


    display: flex;
    align-items: center;
    gap: 14px;

    
color: ${({theme}) => theme.COLORS.LIGHT_100};
background-color: ${({theme}) => theme.COLORS.DARK_900};
border: none;
border-radius: 10px;

}
>#input-text>input{
  width: 420px;
  height:48px;

  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background-color: transparent;
  border: none;
  border-radius: 10px;

  &:placeholder{
    color:${({theme}) => theme.COLORS.LIGHT_500};
  }
}

#order{
  width: 216px;
  height: 56px;
}


`;