import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

const initialContext = {
  loading: false,
  userId: 0,
  isLogin: false,
  isSignUp: false
}


interface ProviderLayoutProps {
  children: React.ReactNode
  isStart?: boolean
}


export interface AppState {
  loading: boolean,
  userId: number,
  isLogin: boolean,
  isSignUp: boolean
}

export const AppContext = createContext<{
  appState: AppState,
  setAppState: Dispatch<SetStateAction<AppState>>
}>({ appState: initialContext, setAppState: () => null });

export const StateProvider = ({ children }: ProviderLayoutProps): JSX.Element => {
  const [appState, setAppState] = useState(initialContext);
  return (
    <AppContext.Provider value={{ appState, setAppState}}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = ()  => useContext(AppContext);
