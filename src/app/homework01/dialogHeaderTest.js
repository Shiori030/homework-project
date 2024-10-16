import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DialogHeaderTest ({ children, onClose }) {
  return (
    <div className={'m-5 flex flex-nowrap justify-between border-b-2 border-[#b098986b] pb-1 text-2xl'}>
      {children}
      <button className={'text-[#BEBEBE]'} type="button" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}
