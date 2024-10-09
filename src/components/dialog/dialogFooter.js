export default function DialogFooter({ onClose, children }) {
  return (
    <div className="flex justify-center mt-auto">
      <button className="bg-[#ff988ced] rounded-2xl py-2 px-5 text-xl" onClick={onClose}>
        {children}
      </button>
    </div>
  )
}