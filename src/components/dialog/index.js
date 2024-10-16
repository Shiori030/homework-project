import React, { useEffect, useRef } from 'react'
import DialogContent from './dialogContent'
import DialogFooter from './dialogFooter'
import DialogHeader from './dialogHeader'
import renderComponent from '../../../utils/renderComponent'

export default function Dialog ({ isOpen, onClose, customHeader, customContent, customFooter, title = '默認標題', content = '默認內容', buttonContent = '關閉', className }) {
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
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  const dialogClassName = `flex relative h-80 w-96 flex-col rounded-2xl bg-red-100 text-red-900 shadow-md [&:not([open])]:hidden ${className || ' '}`

  return (
    <dialog className={dialogClassName} ref={dialogRef} onClick={handleClick} onCancel={onClose}>
      <div className='absolute inset-0'>
        {renderComponent(customHeader, { onClose, title }, <DialogHeader onClose={onClose}>{title}</DialogHeader>)}
        {renderComponent(customContent, { content }, <DialogContent>{content}</DialogContent>)}
        {renderComponent(customFooter, { onClose, buttonContent }, <DialogFooter onClose={onClose}>{buttonContent}</DialogFooter>)}
      </div>
    </dialog>
  )
}
