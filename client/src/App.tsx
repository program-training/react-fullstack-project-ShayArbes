
import './App.css'
import NavContextProvider from './components/conText/navContext'
import PageRouter from './PageRouter'


function App() {

  return (
    <>
    <NavContextProvider>
      <PageRouter/>
    </NavContextProvider>
    

    </>
  )
}

export default App
