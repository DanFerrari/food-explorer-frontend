import { Container} from './styles';

export function Buttonteste ({title,isActive = false,...rest}){

return(
    <Container
    type="button"
    isActive = {isActive}
    {...rest}>
        {title}
    </Container>


);
}