import { createContext, useState } from "react";

// Her state bir initialStateye sahip olmalıdır!

export const AuthContext = createContext({})

// props.children => react tarafından otomatik bu komponentin tagleri arasına yazılan yapıyı taşır.
export const AuthProvider = (props:any) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
} // depoyu uygulamaya sağlayacak component