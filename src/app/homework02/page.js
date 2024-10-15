'use client'
import Details from '@/components/details'
import characterData from './characterData'

export default function Homework2 () {
  return (
    <>
    <div className="m-auto mt-10 w-1/3 rounded-xl bg-[#def2ff] p-5 text-[#003385] ">
      <h1 className='mb-3 text-2xl'>吉伊卡哇</h1>
      {characterData.map((data, index) => (<Details key={index} data={data} />))}
    </div>
    </>
  )
}
