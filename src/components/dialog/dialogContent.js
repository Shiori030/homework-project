export default function DialogContent({ children, contentStyles }) {
  return (
    <div className={`${contentStyles}`}>{children}</div>
  )
}
