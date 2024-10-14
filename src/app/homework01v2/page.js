'use client' // 在瀏覽器進行渲染，可以使用hooks

import Dialog from '@/components/dialog/dialog'
import DialogTest from '@/components/dialog/dialogTest'
import { useState } from 'react'

export default function Homework1 () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="bg-red-300 text-red-900 w-80 text-2xl p-5 m-10 rounded-xl hover:shadow-lg hover:bg-[#FFB5B5] transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        我要背論語
      </button>
      <Dialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="每日論語"
      contentComponents={<DialogTest/>}
      />
    </>
  )
}
