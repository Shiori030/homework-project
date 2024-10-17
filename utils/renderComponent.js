import React from 'react'

const renderComponent = (Component, props, defaultComponent) => {
  if (React.isValidElement(Component)) {
    return React.cloneElement(Component, props)
  }
  if (typeof Component === 'function') {
    return Component(props)
  }
  return defaultComponent
}

export default renderComponent
