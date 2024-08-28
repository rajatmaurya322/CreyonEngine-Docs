import { useState } from "react";
import "./App.css";
import SideBar from "./SideBar";
import hamburger from "./images/hamburger.png";
import leftarrow from "./images/left-arrow.png";
import rightarrow from "./images/right-arrow.png";
import Chapter from "./Chapter";

function App() {
  //mobile browser
  const [sideBarState, setSideBarState] = useState(false);

  const openSideBar = ()=>{
      if(!sideBarState){
        let sidebar = document.querySelector("aside");
        sidebar.style.transform = 'scaleX(1)';
        sidebar.style.width = '70vw';
        setSideBarState(true);
      }
  }

  const collapseSideBar = (e)=>{
    let sidebar = document.querySelector("aside");
    if(sidebar === e.target || sidebar.contains(e.target))return;
    if(sideBarState && document.documentElement.clientWidth < 760){
      sidebar.style.transform = 'scaleX(0)';
      setSideBarState(false);
    }
  }
  
  return (
    <div onClick={collapseSideBar} className="App">
      <header className="flex-row">
        <div className="placeholder-aside"></div>
        <nav className="flex-row items-center mt-05">
          
          <div onClick={openSideBar} className="hamburger-icon">
            <img src={hamburger} alt="hamburger.png"></img>
          </div>
          
          <div className="flex-around items-center">
            <div className="navigator">
              <button className="flex-row items-center gap-05 left">
                <img src={leftarrow} alt="arrow-left.png"></img>
                <div>Previous</div>
              </button>
            </div>
            <div className="current-chapter">Home</div>
            <div className="navigator">
              <button className="flex-row items-center gap-05 right">
                <div>Next</div>
                <img src={rightarrow} alt="arrow-right.png"></img>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      
      <SideBar/>
      <section className="flex-row">
        <div className="placeholder-aside"></div>
        <Chapter/>
      </section>
    </div>
  );
}

export default App;
