import React, { useState } from 'react'
import renderComponent from '../../../utils/renderComponent'

export default function Details ({ data = { summary: '默認名稱', details: '默認詳細' }, summaryStyles, detailsStyles, customIcon, icon, openStyles, closeStyles }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const openClassName = `mb-0 rounded-b-none bg-[#7dc1eb] ${openStyles || ' '}`
  const closeClassName = `mb-3  bg-[#b6e3ff] ${closeStyles || ''}`
  const summaryClassName = `m-auto flex list-none flex-row justify-between rounded-lg p-3 text-xl transition-colors duration-300 ${isOpen ? openClassName : closeClassName} ${summaryStyles || ' '} `
  const detailsClassName = `m-auto mb-2 rounded-b-lg border bg-white p-3 ${detailsStyles || ''}`

  return (
    <>
      <details open={isOpen}>
        <summary onClick={handleClick} className={summaryClassName}>
          <div>{data.summary}</div>
          {renderComponent(customIcon, { isOpen, icon }, <div className={`duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}> {icon || '▶'} </div>)}
        </summary>
        <p className={detailsClassName}>{data.details}</p>
      </details>
    </>
  )
}
