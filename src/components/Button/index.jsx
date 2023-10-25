import { Container} from './styles';

export function Button({title,isActive = false,...rest}){

return(
    <Container
    type="button"
    
    {...rest}>
        {title}
    </Container>


);
}