import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DialogTitle({ children, titleStyles, onClose, titleBtn }) {
  return (
    <div className={`${titleStyles}`}>
      {children}
      <button className={`${titleBtn}`} type="button" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}
