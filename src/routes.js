import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import ShowPokemon from './page/ShowPokemon';

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { <ShowPokemon/> }  path="/details" />
       </BrowserRouter>
   )
}

export default Routes;