import { useEffect, useState, useRef } from 'react'

export default function SummaryDetails ({ data }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <details open={isOpen}>
        <summary className={`text-xl list-none bg-[#b6e3ff] rounded-lg p-3 transition-colors duration-300 ${isOpen ? 'mb-0 rounded-b-none bg-[#7dc1eb]' : ''}`} onClick={() => setIsOpen(!isOpen)}>{data.summary}</summary>
        <p className="p-3 mb-2 border bg-white rounded-b-lg">{data.details}</p>
      </details>
    </>
  )
}
