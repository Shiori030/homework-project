'use client' // 在瀏覽器進行渲染，可以使用hooks

import DialogLayout from '@/components/dialog/dialogLayout'
import { useState } from 'react'

export default function Homework1() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="bg-red-300 text-red-900 w-80 text-2xl p-5 m-10 rounded-xl hover:shadow-lg transition-shadow duration-300"
        onClick={() => setIsOpen(true)}
      >
        我要背論語
      </button>
      <DialogLayout isOpen={isOpen} onClose={() => setIsOpen(false)} title="每日一則論語" content=" 陳司敗問昭公知禮乎，孔子曰：「知禮。」孔子退，揖巫馬期而進之，曰：「吾聞君子不黨，君子亦黨乎？君取於吳，為同姓，謂之吳孟子。君而知禮，孰不知禮？」巫馬期以告。子曰：「丘也幸，苟有過，人必知之。」" btnContent="我背完了" />
    </>
  )
}
