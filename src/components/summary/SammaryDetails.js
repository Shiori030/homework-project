import { useState } from 'react'
import ArrowIcon from './arrowIcon'

export default function SummaryDetails ({ data, iconComponents, icon }) {
  const [isOpen, setIsOpen] = useState(false)

  // 移除默認行為，讓details的open掌握在isOpen上
  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <details open={isOpen}>
        <summary onClick={handleClick} className={`flex list-none flex-row justify-between rounded-lg p-3 text-xl transition-colors duration-300 ${isOpen ? 'mb-0 rounded-b-none bg-[#7dc1eb]' : 'mb-2  bg-[#b6e3ff]'} `}>
          <div>{data.summary}</div>
          {iconComponents || <ArrowIcon isOpen={isOpen} icon={icon}/>}
        </summary>
        <p className="mb-2 rounded-b-lg border bg-white p-3">{data.details}</p>
      </details>
    </>
  )
}
