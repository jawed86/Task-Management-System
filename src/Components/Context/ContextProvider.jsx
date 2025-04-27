import { createContext, useState, useEffect } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext()

const ContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [pageRefresh, setPageRefresh] = useState(0);
    const [hideShowBtn , setHideShowBtn] = useState(true);
    const LocalStoreData = JSON.parse(localStorage.getItem('loggedInUser'));

    // task Hover Effect
    const [newTaskHover , setNewTaskHover] = useState(null);
    const [completedTaskHover , setCompletedTaskHover] = useState(null);
    const [acceptedTaskHover , setAcceptedTaskHover] = useState(null);
    const [failedTaskHover , setFailedTaskHover] = useState(null);
        
    // setLocalStorage();
    useEffect(() => {
        const alreadySet = localStorage.getItem("localStorageSet");
    
        if (!alreadySet) {
            setLocalStorage();
            localStorage.setItem("localStorageSet", "true");
        }
    }, []);
    

    useEffect(() => {
        
        const { employeeData, adminData } = getLocalStorage();
        setUserData({ employeeData, adminData })              

    }, [pageRefresh])




    return (

        <AuthContext.Provider value={{ userData, setUserData,
            pageRefresh, setPageRefresh,
            LocalStoreData,
            hideShowBtn , setHideShowBtn,
            
            newTaskHover , setNewTaskHover,
            completedTaskHover , setCompletedTaskHover,
            acceptedTaskHover , setAcceptedTaskHover,
            failedTaskHover , setFailedTaskHover
         }}>
            {children}
        </AuthContext.Provider>

    )
}

export default ContextProvider