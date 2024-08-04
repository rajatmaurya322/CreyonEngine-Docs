import './SideBar.css'
import hamburger from './images/hamburger.png'
function SideBar(){
    return(
        <aside>
            <div>
            <div className='hero'>
                <img src={hamburger} alt='hero.png'></img>
            </div> 
            <div className='mt-1 hero-text'>CreyonEngine</div>
            </div>
        </aside>
    );
}

export default SideBar;