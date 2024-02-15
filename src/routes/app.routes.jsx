import {Routes,Route} from 'react-router-dom';

import {Dish} from './../pages/Dish';
import {Home} from './../pages/Home';
import { Footer} from '../../src/components/Footer';




export function AppRoutes() {

return(
<Routes>
       <Route path="/" element={<Footer/>}/>
       <Route path="/dishes/:id" element={<Dish/>}/>   
       
</Routes>
)
}