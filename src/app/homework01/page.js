'use client'
import Dialog from '@/components/dialog'
import DialogTest from './dialogTest'
import { useState } from 'react'

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
      title="每日論語"
      contentComponents={<DialogTest/>}
      />
    </>
  )
}
