import {Routes,Route} from 'react-router-dom';

import {Dish} from './../pages/Dish';
import {Home} from './../pages/Home';





export function AppRoutes() {

return(
<Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/dishes/:id" element={<Dish/>}/>   
       
</Routes>
)
}