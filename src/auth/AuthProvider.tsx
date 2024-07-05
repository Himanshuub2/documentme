import { authContext } from "./authContext";
import { useReducer } from "react";
import reducer from "@/reducer/reducer";
import { initialState } from "@/reducer/initialState";

export default function AuthProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <authContext.Provider value={{dispatch:dispatch,state:state}}>
            {children}
        </authContext.Provider>
    )
}