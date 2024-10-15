export default function DialogFooter ({ onClose, children }) {
  return (
    <div className={'mt-auto flex justify-center'}>
      <button className={'rounded-2xl bg-[#ff988ced] px-5 py-2 text-xl transition-all duration-300 hover:bg-[#FFB5B5] hover:shadow-lg'} onClick={onClose}>
        {children}
      </button>
    </div>
  )
}
