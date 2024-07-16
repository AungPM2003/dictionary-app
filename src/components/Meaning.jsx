import React from 'react'
import Word from './meaning/Word'
import Type from './meaning/Type'
import Source from './meaning/Source'
import { useGetDefinitionByWordQuery } from '../service/dictionaryApi'
import { getWord } from '../wordSlice'
import { useSelector } from 'react-redux'

export default function Meaning({data}) {

  if(!data) return null
  return (
    <div className='mt-[65px]'>
       <div className='flex justify-between'>
        <Word data={data}/>
       </div>
       {
        data[0]?.meanings.map(meaning => 
          <Type key={meaning.partOfSpeech} meaning={meaning}/>
        )
       }
    
        <Source data={data}/>
    </div>
  )
}
