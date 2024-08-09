import { useState } from 'react';
import './ChapterDrive.css'

function ChapterDrive(){

    const [driveState, setDriveState] = useState(false);
    
    const clickTransform = ()=> {
        let chapterDrive = document.querySelector(".chapter-drive");
        let usb = document.querySelector(".usb");
        if(driveState === false){
            setDriveState(true);
            chapterDrive.classList.add('chapter-drive-transform');
            usb.classList.add('usb-transform');
        }
        else{
            setDriveState(false);
            chapterDrive.classList.remove('chapter-drive-transform');
            usb.classList.remove('usb-transform');
        }
    }

    return(
        <div onTouchStart={clickTransform} onClick={clickTransform} className='chapter-drive'>
            abc
            <div className='usb'>
            <div className='usb-face'></div>
            </div>
        </div>
    );
}

export default ChapterDrive;