import React from 'react'
import PropTypes from 'prop-types'

export const TypesInProp = ({ title, version }) => {
  return (
    <div>
    <h3>{title}</h3>
    <h2>{version}</h2>
    </div>
  )
}

TypesInProp.propTypes = {
    title: PropTypes.string,
    version: PropTypes.number.isRequired,  // it will make it required to define
}