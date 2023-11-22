import {Container} from './styles';

export function Input({icon:Icon,title,...rest}){



return( 
<Container>

<label>{title}</label>  
<input  {...rest}/>

</Container>
)
}