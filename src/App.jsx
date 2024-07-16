import React from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Meaning from './components/Meaning'
import { useSelector } from 'react-redux'
import { getFont, getWord } from './wordSlice'
import { useGetDefinitionByWordQuery } from './service/dictionaryApi'
import NotFound from './components/NotFound'



export default function App() {
  const font = useSelector(getFont);
  const word = useSelector(getWord)
  const {data,isError} = useGetDefinitionByWordQuery(word) 
  console.log(font)
  return (
    
    <div className={`h-full font-${font} dark:bg-black pt-6 transition-all duration-300`}>
      <main className='mobile:w-[90%] tablet:w-3/5 w-4/5 m-auto'>
        <Navbar/>
        <Searchbar/>
        { isError && word.length > 0? 
        <NotFound/>:
        <Meaning data={data}/>
        }
      </main>
    </div>
  )
}
