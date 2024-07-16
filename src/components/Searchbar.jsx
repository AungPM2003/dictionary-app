import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWord, updateWord } from '../wordSlice';
import Empty from './Empty';

export default function Searchbar() {
  const [searchWord,setSearchWord] = useState('')
  const [isEmpty,setIsEmpty] = useState(false)
  const word = useSelector(getWord)
  const dispatch = useDispatch();
  function handleClick(){
    if(searchWord.length === 0) {
      setIsEmpty(true)
      setSearchWord('')
    }else{
      setIsEmpty(false)
    }
   
    dispatch(updateWord(searchWord))
    
  }
  return (
    <>
      <div className='flex relative mt-[65px]'>
          <input type="text" className={`w-full font-bold text-xl placeholder:text-x py-5 px-6 rounded-2xl dark:bg-secondaryBlack bg-paleWhite dark:text-white ${isEmpty ? 'ring-2 ring-red-500': ''}` } placeholder='Search for any word...' value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
          <button className='absolute right-[24.45px] top-1/2 -translate-y-1/2' onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
          </button>    
      </div>
      {
        isEmpty ?  <Empty/> : null
      }
    </>
  )
}
