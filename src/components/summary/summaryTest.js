import { useState } from 'react'
import ArrowIcon from './arrowIcon'

export default function SummaryTest ({ data, iconComponents, icon }) {
  const [isOpen, setIsOpen] = useState(false)
  // 移除默認行為，讓details的open掌握在isOpen上
  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(prev => !prev)

    // 防止data未定義
    if (!data) return null
  }
  return (
        <>
            <details open={isOpen}>
                <summary onClick={handleClick} className={`flex flex-row justify-between transition-colors duration-300 text-xl list-none p-3 rounded-lg ${isOpen ? 'mb-0 rounded-b-none bg-[#f4a9ff]' : 'mb-2  bg-[#ffcbfd]'} `}>
                    <div>{data.summary}</div>
                    {iconComponents || <ArrowIcon isOpen={isOpen} icon={icon} />}
                </summary>
                <p className="p-3 mb-2 border bg-white rounded-b-lg">{data.details}</p>
            </details>
        </>
  )
}
