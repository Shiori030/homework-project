import { useEffect, useRef, useState } from 'react'
import DialogContent from './dialogContent'
import DialogFooter from './dialogFooter'
import DialogTitle from './dialogTitle'

// props們的預設值
DialogLayout.defaultProps = {
  title: '默認標題',
  content: '默認內容',
  btnContent: '關閉',
}

export default function DialogLayout({ isOpen, onClose, title, content, btnContent }) {
  const dialogRef = useRef(null)
  const [isRendered, setIsRendered] = useState(false)

  // 初次渲染後變更狀態
  useEffect(() => {
    setIsRendered(true)
  }, [])

  // 確定非初次渲染偵測isOpen狀態決定dialog開啟或關閉
  useEffect(() => {
    if (dialogRef.current && isRendered) {
      if (isOpen) {
        dialogRef.current.showModal()
      }
      else {
        dialogRef.current.close()
      }
    }
  }, [isOpen])

  if (!isRendered)
    return null

  return (
    <dialog className="flex flex-col bg-red-100 w-96 rounded-2xl shadow-md h-80 p-5 [&:not([open])]:hidden text-red-950" ref={dialogRef}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogFooter onClose={onClose}>{btnContent}</DialogFooter>
    </dialog>
  )
}
