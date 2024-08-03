import "./App.css";
import SideBar from "./SideBar";
import hamburger from "./images/hamburger.png";

function App() {
  return (
    <div className="App">
      <header className="flex-row">
        <SideBar/>
        <nav className="flex-row items-center mt-05">
          <div className="hamburger-icon">
            <img src={hamburger} alt="hamburger.png"></img>
          </div>
          <div className="flex-around">
            <div className="navigator">
              <button>Previous</button>
            </div>
            <div className="selector">
              <select>
                <option>Asfsdfsdfsdf</option>
                <option>A</option>
                <option>Asfsfsdfsdfsdfsdfsdf</option>
              </select>
            </div>
            <div className="navigator">
              <button>Next</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
