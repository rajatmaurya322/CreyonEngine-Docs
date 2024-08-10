import { useState } from 'react';
import './ChapterDrive.css'

function ChapterDrive(){
    
    const clickTransform = (e)=> {
        let chapterDrive = e.target;
        if(!chapterDrive.classList.contains('chapter-drive')) return;
        const activeChapterDrive = document.querySelector('.chapter-drive-transform');
        cleanUp(activeChapterDrive);
        if(activeChapterDrive == chapterDrive) return;
        let usb = chapterDrive.querySelector(".usb");
        chapterDrive.classList.add('chapter-drive-transform');
        usb.classList.add('usb-transform');
    }

    const cleanUp = (chapterDrive)=>{
        if(!chapterDrive) return;
        chapterDrive.classList.remove('chapter-drive-transform');
        let usb = chapterDrive.querySelector(".usb");
        usb.classList.remove('usb-transform');
    }

    return(
        <div onClick={clickTransform} className='chapter-drive'>
            abc
            <div className='usb'>
            <div className='usb-face'></div>
            </div>
        </div>
    );
}

export default ChapterDrive;