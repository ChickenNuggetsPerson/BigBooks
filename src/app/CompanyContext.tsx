"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CompanyContextProps } from "./CompanyProps";




type CompanyContextType = {
    context: CompanyContextProps | null;
    setContext: (props: CompanyContextProps) => void;
};

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
    const [context, setContext] = useState<CompanyContextProps | null>(null);

    // Load company from localStorage on first render
    useEffect(() => {
        const storedCompany = localStorage.getItem("companyContext");
        if (storedCompany) {
            setContext(JSON.parse(storedCompany));
        }
    }, []);

    // Save company to localStorage whenever it changes
    const handleSetContext = (props: CompanyContextProps) => {
        setContext(props);
        localStorage.setItem("companyContext", JSON.stringify(props));
    };
    
    return (
        <CompanyContext.Provider value={{ context, setContext : handleSetContext }}>
            {children}
        </CompanyContext.Provider>
    );
}

export function useCompany() {
    const context = useContext(CompanyContext);
    if (!context) {
        throw new Error("useCompany must be used within a CompanyProvider");
    }
    return context;
}
