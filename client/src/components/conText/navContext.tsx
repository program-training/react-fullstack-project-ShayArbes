import React, { useState, createContext } from "react";

interface UserContextProviderProps {
  children: React.ReactNode;
}
type Opt = "SingUp" | "AllTrips" | "LogeIn" | "Home" | 'NewTripForm'|"TripDetail"|"UpdateTripForm";
export interface NavContextType {
  option:Opt;
  setOption: (option:Opt) => void;
}
export const NavContext = createContext<NavContextType>({
  option: "Home",
  setOption: () => {},
});
function NavContextProvider(props: UserContextProviderProps) {
  const [option, setOption] = useState<Opt>("Home");
  return (
    <NavContext.Provider value={{ option, setOption }}>
      {props.children}
    </NavContext.Provider>
  );
}

export default NavContextProvider;
