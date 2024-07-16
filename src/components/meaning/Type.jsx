import React from 'react'
import Definition from './Definition'
import Synonyms from './Synonyms'

export default function Type({meaning}) {
  return (
    <div className='my-10'>
        <div className='flex items-center gap-5'>
          <p className='font-bold italic tablet:text-2xl text-xl dark:text-white'>{meaning.partOfSpeech}</p>
          <hr className='flex-1 text-white-1'></hr>
        </div>
        <div className='my-10'>
          <Definition meaning={meaning}/>
        </div>
        <Synonyms meaning={meaning}/>
    </div>
  )
}
