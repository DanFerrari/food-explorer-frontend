import {Container} from './styles';
import { Logo } from '../../components/Logo';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';



export function SignIn(){
  

return(<Container>
<Logo/>
<form action="">

        <span>Faça login</span>


                <Input class="inputSign" title='Email' placeholder='Exemplo: exemplo@exemplo.com.br'/>
                
                <Input class="inputSign" title='Senha' placeholder='No mínimo 6 caracteres'/>

        <Button title='Entrar'/>

        <a href="">Criar uma conta</a>        

</form>

</Container>

);
}