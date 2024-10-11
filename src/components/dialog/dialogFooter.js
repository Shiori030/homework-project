export default function DialogFooter({ onClose, children, footerStyles, footerBtn }) {
  return (
    <div className={footerStyles}>
      <button className={footerBtn} onClick={onClose}>
        {children}
      </button>
    </div>
  )
}
