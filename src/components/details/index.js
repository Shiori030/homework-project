import React, { useState } from 'react'
import ArrowIcon from '../details/arrowIcon'

export default function Details ({ data = { summary: '默認名稱', details: '默認詳細' }, summaryStyles, detailsStyles, customIcon, icon }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  const renderComponent = (Component, props, defaultComponent) => {
    if (React.isValidElement(Component)) {
      return React.cloneElement(Component, props)
    }
    return defaultComponent
  }

  const summaryClassName = `m-auto flex list-none flex-row justify-between rounded-lg p-3 text-xl transition-colors duration-300 ${isOpen ? 'mb-0 rounded-b-none bg-[#7dc1eb]' : 'mb-3  bg-[#b6e3ff]'} ${summaryStyles || ' '} `
  const detailsClassName = `m-auto mb-2 rounded-b-lg border bg-white p-3 ${detailsStyles || ''}`

  return (
    <>
      <details open={isOpen}>
        <summary onClick={handleClick} className={summaryClassName}>
          <div>{data.summary}</div>
          {renderComponent(customIcon, { isOpen, icon }, <ArrowIcon isOpen={isOpen} icon={icon}/>)}
        </summary>
        <p className={detailsClassName}>{data.details}</p>
      </details>
    </>
  )
}
