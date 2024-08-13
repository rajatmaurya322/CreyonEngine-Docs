import ChapterDrive from './ChapterDrive';
import './SideBar.css'

function SideBar(){
    return(
        <aside className='flex-column items-center gap-3'>
            <ChapterDrive/>
            <ChapterDrive/>
            <ChapterDrive/>
            <ChapterDrive/>
            <ChapterDrive/>
            <ChapterDrive/>
        </aside>
    );
}

export default SideBar;