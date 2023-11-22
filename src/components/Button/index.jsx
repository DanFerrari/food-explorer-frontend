import { Container} from './styles';

export function Button({title,Icon,...rest}){

return(
    <Container
    type="button"
    
    {...rest}>
       {Icon && <Icon size="32px"/>}
        {title}
    </Container>


);
}