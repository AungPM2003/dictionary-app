import React from 'react'

export default function Definition({meaning}) {
  return (
    <>
        <div className='tablet:text-2xl text-xl mb-6 text-paleBlack'>Meaning</div>
        <ul className='dark:text-white list-disc marker:text-purple ps-[22px] space-y-3 text-lg tablet:text-xl'>
          {
            meaning.definitions.map((definition) =>(
              <li>
                <p>
                  {definition.definition}
                </p>
                {definition.example ? <p className='text-paleBlack'>"{definition.example}"</p> : ""}
              </li>
            ))
          }
        </ul>
    </>
  )
}
