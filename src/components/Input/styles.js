import styled from "styled-components";

export const Container = styled.div`
width: 348px;
height: 72px;
display: flex;
align-items: start;
flex-direction: column;
gap:8px;


color: ${({theme}) => theme.COLORS.LIGHT_500 };





> input {

    width: 348px;
height: 48px;

  padding: 12px;

  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border: none;
  border-radius: 10px;

  &:placeholder{
    color:${({theme}) => theme.COLORS.LIGHT_500};
  }


}


>label{
  font-family: 'Roboto', sans-serif;
  color: ${({theme}) => theme.COLORS.LIGHT_400};

}




`;