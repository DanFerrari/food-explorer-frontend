import { useState} from 'react';
import {Container} from './styles';
import { Logo } from '../../components/Logo';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import{api} from '../../services/api'
import { Link, useNavigate } from 'react-router-dom';




export function SignUp(){
 const [name, setName ] = useState(""); 
 const [email, setEmail ] = useState(""); 
 const [password, setPassword] = useState("");

 const navigate = useNavigate();
 function handleSignUp(){
        if (!name || !email || !password) {
                return alert("Preencha todos os campos!");
        }

        api.post("/users", {name, email, password }).then(() => {
                alert("Conta criada com sucesso!");
                navigate("/");

        })
        .catch(error => {
                if(error.response){
                        alert(error.response.data.message);
                }
                else{
                        alert("Não foi possível cadastrar");
                }
        });
}



return(<Container>
<Logo/>
<form action="">

        <span>Crie sua conta</span>

                <Input
                 title='Seu nome'
                 placeholder='Exemplo: Maria da Silva'
                 onChange = {e => setName(e.target.value)}
                 />

                <Input title='Email'
                 placeholder='Exemplo: exemplo@exemplo.com.br'
                 onChange = {e => setEmail(e.target.value)}
                 />
                
                <Input title='Senha' 
                placeholder='Exemplo: No mínimo 6 caracteres'
                onChange = { e => setPassword(e.target.value)}
                />

        <Button title='Criar conta' onClick={handleSignUp}/>

        <Link to="/" >Já tenho uma conta</Link>        

</form>

</Container>

);
}