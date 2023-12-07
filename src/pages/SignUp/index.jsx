import {Container} from './styles';
import { Logo } from '../../components/Logo';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';



export function Signup(){
  

return(<Container>
<Logo/>
<form action="">

        <span>Crie sua conta</span>

                <Input title='Seu nome' placeholder='Exemplo: Maria da Silva'/>

                <Input title='Email' placeholder='Exemplo: exemplo@exemplo.com.br'/>
                
                <Input title='Seu nome' placeholder='Exemplo: No mínimo 6 caracteres'/>

        <Button title='Criar conta'/>

        <a href="">Já tenho uma conta</a>        

</form>

</Container>

);
}