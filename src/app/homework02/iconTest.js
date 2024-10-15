export default function IconTest ({ isOpen }) {
  return (
          <>
              <div className={`duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}> <img src="/hachi.avif" width={'50px'}></img> </div>
          </>
  )
}
