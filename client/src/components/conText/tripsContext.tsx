import React, { useState, createContext } from "react";

export interface Data {
    id:string,
    name: string
    destination: string
    startDate: string
    endDate: string
    description: string
    price: number
    image: string
    activities: string[]
    }

interface UserContextProviderProps {
    children: React.ReactNode;
  }
 
  export interface TripContextType {
    trip: Data | undefined;
    setTrip: (trip:Data | undefined) => void;
  }
  export const TripContext = createContext<TripContextType>({
    trip:undefined,
    setTrip: () => {}
  });

  function TripContextProvider(props: UserContextProviderProps) {
    const [trip, setTrip] = useState<Data>();
    return (
      <TripContext.Provider value={{ trip, setTrip }}>
        {props.children}
      </TripContext.Provider>
    );
  }