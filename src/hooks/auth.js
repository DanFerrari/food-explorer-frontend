import { createContext, useContext, useState, useEffect } from "react";

import {api} from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({children}) {
    
    const [data, setData] = useState({});

    async function signIn({email,password}){

      



    }





}