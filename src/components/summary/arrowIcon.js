export default function ArrowIcon ({ isOpen, icon }) {
  return (
        <>
            <div className={`duration-300 ease-in-out${isOpen ? 'rotate-90' : 'rotate-0'}`}> {icon || '▶'} </div>
        </>
  )
}
