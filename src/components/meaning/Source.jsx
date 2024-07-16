import React from 'react'

export default function Source({data}) {
  if(!data) return null;
  return (
    <div className='pb-3 flex items-baseline gap-5 border-t-[1px] border-t-white-1 pt-3'>
        <p className=' tablet:text-xl text:lg  text-paleBlack'>Source</p>
        <div className='text-textClr flex items-baseline gap-2'>
            <a href={data[0].sourceUrls} className='text-paleBlack underline underline-offset-4'>{data[0].sourceUrls}</a>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
            </span>
        </div>
    </div>
  )
}
