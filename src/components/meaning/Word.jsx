import React from 'react'

export default function Word({data}) {
  if(!data) return null
  const phonetic = data[0].phonetic ? data[0].phonetic : data[0].phonetics[1].text
  const audioLink = data[0].phonetics[0]?.audio   
  function handleAudio(audio){
    new Audio(audio).play();
  }
  return (
    <>
        <div>
            <div className='text-4xl font-bold tracking-wide dark:text-white '>{data[0].word}</div>
            <div className='mt-2 font-semibold text-purple'>{phonetic}</div>
        </div>
        <div>
            <button onClick={() => handleAudio(audioLink)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-secondaryPurple fill-purple" width="75" height="75" viewBox="0 0 75 75"><g fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
            </button>
        </div>
    </>
  )
}
