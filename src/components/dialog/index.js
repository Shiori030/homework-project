import { useEffect, useRef } from 'react'
import DialogContent from './dialogContent'
import DialogFooter from './dialogFooter'
import DialogHeader from './dialogHeader'

export default function Dialog ({ isOpen, onClose, headerComponents, contentComponents, footerComponents, title = '默認標題', content = '默認內容', buttonContent = '關閉' }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal()
      } else {
        dialogRef.current.close()
      }
    }
  }, [isOpen])

  return (
    <dialog className={'flex flex-col w-96 rounded-2xl shadow-md h-80 p-5 [&:not([open])]:hidden bg-red-100 text-red-900'} ref={dialogRef}>
        {headerComponents || <DialogHeader onClose={onClose}>{title}</DialogHeader>}
        {contentComponents || <DialogContent>{content}</DialogContent>}
        {footerComponents || <DialogFooter onClose={onClose}>{buttonContent}</DialogFooter>}
    </dialog>
  )
}
