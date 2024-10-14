import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DialogHeader ({ children, onClose }) {
  return (
    <div className={'flex justify-between flex-nowrap text-2xl border-b-2 pb-1 border-[#b098986b]'}>
      {children}
      <button className={'text-[#BEBEBE]'} type="button" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}
