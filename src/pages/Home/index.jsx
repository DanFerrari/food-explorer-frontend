import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";


export function Home(){

return(
<Container>
        <Navbar/>

            <section>
                    <img src="src\assets\imgs\foodHomeBack.png" alt="" />
                    <div>
                        <p>Sabores inigualáveis</p>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>


            </section>

                
           <div>
            <h2>Refeições</h2>            
           </div>


           <div>
            <h2>Sobremesas</h2>
           </div>


           <div>
            <h2>Bebidas</h2>
           </div>



</Container>
)



}