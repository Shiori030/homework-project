import { useEffect, useRef, useState } from 'react'
import DialogContent from './dialogContent'
import DialogFooter from './dialogFooter'
import DialogHeader from './dialogHeader'

export default function Dialog ({ isOpen, onClose, headerComponents, contentComponents, footerComponents, title, content, btnContent }) {
  const dialogRef = useRef(null)
  const [isRendered, setIsRendered] = useState(false)

  Dialog.defaultProps = {
    title: '默認標題',
    content: '默認內容',
    btnContent: '關閉'
  }

  // 初次渲染後變更狀態
  useEffect(() => {
    setIsRendered(true)
  }, [])

  // 確定非初次渲染偵測isOpen狀態決定dialog開啟或關閉
  useEffect(() => {
    if (dialogRef.current && isRendered) {
      if (isOpen) {
        dialogRef.current.showModal()
      } else {
        dialogRef.current.close()
      }
    }
  }, [isOpen])

  if (!isRendered) { return null }

  return (
    <dialog className={'lex flex-col w-96 rounded-2xl shadow-md h-80 p-5 [&:not([open])]:hidden bg-red-100 text-red-900'} ref={dialogRef}>
      <div className='header'>
        {headerComponents || <DialogHeader onClose={onClose}>{title}</DialogHeader>}
      </div>
      <div className='content'>
        {contentComponents || <DialogContent>{content}</DialogContent>}
      </div>
      <div className='footer'>
        {footerComponents || <DialogFooter onClose={onClose}>{btnContent}</DialogFooter>}
      </div>
    </dialog>
  )
}
