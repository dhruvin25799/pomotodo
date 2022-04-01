import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { userDataReducer, initialUserData } from "../reducers/userDataReducer";

const userDataContext = createContext();

const UserDataProvider = ({children}) => {
    const [userData, userDataDispatch] = useReducer(userDataReducer, initialUserData);

    useEffect(()=> {
        const localData = JSON.parse(localStorage.getItem("userData"));
        if(localData){
            userDataDispatch({type: "GET_LOCAL", payload: localData});
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData]);
    return <userDataContext.Provider value={{userData, userDataDispatch}}>{children}</userDataContext.Provider>
}

const useUserData = () => useContext(userDataContext);

export {useUserData, UserDataProvider};

