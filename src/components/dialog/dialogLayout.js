import { useEffect, useRef, useState } from 'react'
import DialogContent from './dialogContent'
import DialogFooter from './dialogFooter'
import DialogTitle from './dialogTitle'

// props們的預設值
DialogLayout.defaultProps = {
  title: '默認標題',
  content: '默認內容',
  btnContent: '關閉',
  styles: {
    dialog: 'lex flex-col w-96 rounded-2xl shadow-md h-80 p-5 [&:not([open])]:hidden bg-red-100 text-red-900',
    title: 'flex justify-between flex-nowrap text-2xl border-b-2 pb-1 border-[#b098986b]',
    titleBtn: 'text-[#BEBEBE]',
    content: 'mt-3 text-lg text-justify',
    footer: 'flex justify-center mt-auto',
    footerBtn: 'bg-[#ff988ced] rounded-2xl py-2 px-5 text-xl hover:shadow-lg hover:bg-[#FFB5B5] transition-all duration-300',
  },
}

export default function DialogLayout({ isOpen, onClose, title, content, btnContent, styles }) {
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
    <dialog className={`${styles.dialog}`} ref={dialogRef}>
      <DialogTitle titleStyles={`${styles.title}`} titleBtn={`${styles.titleBtn}`} onClose={onClose}>{title}</DialogTitle>
      <DialogContent contentStyles={`${styles.content}`}>{content}</DialogContent>
      <DialogFooter footerStyles={`${styles.footer}`} footerBtn={`${styles.footerBtn}`} onClose={onClose}>{btnContent}</DialogFooter>
    </dialog>
  )
}
