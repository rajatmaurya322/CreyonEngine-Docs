import './Chapter.css'

function Chapter(){
    return(
        <main>
          <h1>Welcome to CreyonEngine Documentation!</h1>
          <p>This site serves as a learning guide to use the game engine for creating video games.</p><br/>

          <h2>About CreyonEngine:</h2>
          <p>A 3D open-source Game Engine developed in C++. It is a long term fun indie project.</p><br/>
          
          <h2>How to navigate this site?</h2>
          <ul>
            <li><p>Select different chapters by accessing the sidebar. The sidebar can be accessed by clicking the hamburger icon on Mobile and can be seen directly on PC.</p></li>
            <li><p>Click on a Chapter-Drive to access the chapter. Scroll the sidebar to see all available chapters.</p></li>
            <li><p>Clicking an already loaded Chapter-Drive removes it and the Home Page will be displayed.</p></li>
            <li><p>Use the Previous and Next button on the top to easily navigate between chapters.</p></li>
          </ul>
        </main>
    )
}

export default Chapter;