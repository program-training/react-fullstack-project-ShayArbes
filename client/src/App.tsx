import "./App.css";
import NavContextProvider from "./components/conText/navContext";
import TripContextProvider from "./components/conText/tripsContext";
import PageRouter from "./PageRouter";

function App() {
  return (
    <NavContextProvider>
      <TripContextProvider>
        <PageRouter />
      </TripContextProvider>
    </NavContextProvider>
  );
}

export default App;
