import { createContext, useContext, useState } from "react";

const ContextProvider=createContext();

export const useContextProvider=()=>useContext(ContextProvider);

export const DataContextProvider =({children})=>{
    const [statusMessage,setStatusMessage]=useState("");
    const [isStatus,setIsStatus]=useState(false);
    const [isLogin,setIsLogin]=useState(false);
return(
    <ContextProvider.Provider value={{statusMessage,setStatusMessage,isStatus,setIsStatus,isLogin,setIsLogin}} >
        {children}
    </ContextProvider.Provider>
)
}