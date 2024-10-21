'use client'
import Dialog from '@/components/dialog'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Homework1 () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="m-10 w-80 rounded-xl bg-red-300 p-5 text-2xl text-red-900 transition-all duration-300 hover:bg-[#FFB5B5] hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        我要背論語
      </button>
      <Dialog
      isOpen={isOpen}
      onClose={() => setIsOpen(!isOpen)}
      customHeader={({ onClose }) => {
        return (
          <div className={'m-5 flex flex-nowrap justify-between border-b-2 border-[#b098986b] pb-1 text-2xl'}>
            測試用的Header
            <button className={'text-[#BEBEBE]'} type="button" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )
      }}
      customContent={() => {
        return (
        <div className={'m-5 mt-0 text-justify text-lg text-red-700'}> 子曰：「吾十有五而志於學，三十而立，四十而不惑，五十而知天命，六十而耳順，七十而從心所欲，不踰矩。」</div>
        )
      }}
      />
    </>
  )
}
