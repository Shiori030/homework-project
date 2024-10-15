import { useEffect, useRef } from 'react'
import DialogContent from './dialogContent'
import DialogFooter from './dialogFooter'
import DialogHeader from './dialogHeader'

export default function Dialog ({ isOpen, onClose, headerComponents, contentComponents, footerComponents, title = '默認標題', content = '默認內容', buttonContent = '關閉', className }) {
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

  const handleClick = (e) => {
    const dialogPosition = dialogRef.current.getBoundingClientRect()
    if (
      e.clientX < dialogPosition.left ||
      e.clientX > dialogPosition.right ||
      e.clientY < dialogPosition.top ||
      e.clientY > dialogPosition.bottom
    ) {
      onClose()
    }
  }

  const dialogClassName = `flex h-80 w-96 flex-col rounded-2xl bg-red-100 p-5 text-red-900 shadow-md [&:not([open])]:hidden ${className || ' '}`

  return (
    <dialog className={dialogClassName} ref={dialogRef} onClick={handleClick}>
        {headerComponents || <DialogHeader onClose={onClose}>{title}</DialogHeader>}
        {contentComponents || <DialogContent>{content}</DialogContent>}
        {footerComponents || <DialogFooter onClose={onClose}>{buttonContent}</DialogFooter>}
    </dialog>
  )
}
