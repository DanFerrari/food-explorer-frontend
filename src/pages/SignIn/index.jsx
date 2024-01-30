import { useState } from 'react';
import {Container} from './styles';
import { Logo } from '../../components/Logo';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useAuth} from '../../hooks/auth';
import { Link } from 'react-router-dom';


export function SignIn(){
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }

return(<Container>
<Logo/>
<form action="">

        <span>Faça login</span>


                <Input class="inputSign" title='Email' placeholder='Exemplo: exemplo@exemplo.com.br' onChange={e => setEmail(e.target.value)}/>
                
                <Input class="inputSign" title='Senha' placeholder='No mínimo 6 caracteres' onChange={e => setPassword(e.target.value)}/>

        <Button title='Entrar' onClick={handleSignIn}/>

        <Link to="/register">
  Criar Conta
</Link>        

</form>

</Container>

);
}