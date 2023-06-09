import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { Spin } from "antd";

export const AuthContext = createContext();


function AuthProvider({ children }) {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL })
                setIsLoading(false);
                navigate("/chat");
            }
        });

        return () => {
            unsubscribed();
        }

    }, [navigate])

    return (
        <AuthContext.Provider value={user}>
            {isLoading ? <div className="justify-center items-center flex w-full h-screen"><Spin size="large"/> </div> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;