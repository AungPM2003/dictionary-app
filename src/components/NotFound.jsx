import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center'>
        <p className='text-6xl'>☹️</p>
        <p className='mt-[44px] mb-6 font-bold text-xl dark:text-white'>No Definitions Found</p>
        <p className='text-xl dark:text-white'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}
