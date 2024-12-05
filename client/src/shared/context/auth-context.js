import { createContext } from "react";

// Creating a context for managing authentication state in the application.
export const AuthContext = createContext({
    isLoggedIn: false,
    userId: null,
    updateCounter: () => {},
    login: () => { },
    logout: () => { }
});