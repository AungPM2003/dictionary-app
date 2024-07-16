import React from 'react'

export default function Synonyms({meaning}) {
  const {synonyms} = meaning
  if(synonyms.length === 0) return null;
  return (
    <div className='flex items-baseline gap-5'>

        <p className='text-gray-2 tablet:text-2xl text-xl text-paleBlack'>Synonyms</p>
        <div className='flex flex-wrap gap-5'>
        {
            synonyms.map((synonym) => (
              <p key={synonym} className='text-purple tablet:text-xl text-lg font-bold'>{synonym}</p>
            ))
          }
        </div>
    </div>
  )
}
