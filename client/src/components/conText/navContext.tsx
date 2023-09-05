import React, { useState, createContext } from "react";

interface UserContextProviderProps {
  children: React.ReactNode;
}

export interface NavContextType {
  option: "SingUp" | "AllTrips" | "LogeIn" | "Home" | 'CreateTrip';
  setOption: (option: "SingUp" | "AllTrips" | "LogeIn" | "Home" | 'CreateTrip') => void;
}
export const NavContext = createContext<NavContextType>({
  option: "Home",
  setOption: () => {},
});
function NavContextProvider(props: UserContextProviderProps) {
  const [option, setOption] = useState<"SingUp" | "AllTrips" | "LogeIn" | "Home" | 'CreateTrip'>("Home");
  return (
    <NavContext.Provider value={{ option, setOption }}>
      {props.children}
    </NavContext.Provider>
  );
}

export default NavContextProvider;
