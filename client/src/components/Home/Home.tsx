import "./Home.css";
import Nav from "../Nav/nav";
// import { styled } from "styled-components";
function Home() {
  return (
    <div className="bgImg">
      <Nav />
      <div style={{width: "100%", height: '4rem', opacity: "0.5", position: "absolute", top: "0", left: "0", background: "white"}}>
        
      </div>
    </div>
  );
}

export default Home;


