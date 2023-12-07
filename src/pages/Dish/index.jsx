import {Container} from './styles';
import {Navbar} from '../../components/Navbar';
import { Button } from '../../components/Button';
import { ButtonCount } from '../../components/ButtonCount';
export function Dish(){

return(
<Container>
    <Navbar/>
    <a href=""><svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L2.41421 11L11.7071 20.2929C12.0976 20.6834 12.0976 21.3166 11.7071 21.7071C11.3166 22.0976 10.6834 22.0976 10.2929 21.7071L0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z" fill="white"/>
</svg> voltar
</a>

<div class="container">
<img src="src\assets\imgs\ravanello\ravanello400.svg" alt="" />
    
    <div class="content">
    <h1>Salada Ravanello</h1>
    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

    <div id='tags'>
        <span>alface</span>
        <span>cebola</span>
        <span>pão naan</span>
        <span>pepino</span>
        <span>rabanete</span>
        
    </div>

            <div class="confirm">
                <ButtonCount/>
                <Button id='btnIncluir' title="incluir - R$25,00"/>

            </div>


    </div>


</div>

</Container>
)
};