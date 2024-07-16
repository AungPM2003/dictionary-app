import React, { useEffect, useState } from 'react'
import Icon from './Icon'
import { useDispatch} from 'react-redux';
import { updateFont } from '../wordSlice';

export default function Navbar() {
    // const fonts = ['Sans Serif','Serif','Mono']
    const fonts = [
        {key:"sans",name:"Sans Serif"},
        {key:"serif",name:"Serif"},
        {key:"mono",name:"Mono"},
    ]
    const dispatch = useDispatch();
    const [darkMode,setDarkMode] = useState("light");

    useEffect(() => {
        if(darkMode === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[darkMode])

    function handleFont(e){
        dispatch(updateFont(e.target.value))
    }

    function handleDarkMode(){
        setDarkMode(darkMode === 'light' ? 'dark' : 'light')
    }

  return (
    <div className='flex justify-between items-center pt-2'>
        <Icon/>
        <div className='flex gap-2 items-center'>
            <select className='pe-[18px] dark:bg-black dark:text-paleWhite font-bold' onChange={handleFont}>
                {
                    fonts.map((font) => (
                            <option key={font.key} value={font.key}>{font.name}</option> 
                    ))
                }
            </select>
            <span className='text-paleWhite'>|</span>
            <div className=' flex justify-between items-center space-x-1 gap-5'>
                <div className='dark:bg-purple bg-paleBlack relative rounded-full w-10 h-5'>
                    <button className={`bg-paleWhite absolute rounded-full w-[14px] h-[14px] inset-0 my-auto mx-1 dark:left-[18px] transition-all duration-300`}onClick={handleDarkMode}></button>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='dark:stroke-purple stroke-paleBlack' width="22" height="22" viewBox="0 0 22 22"><path fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}
