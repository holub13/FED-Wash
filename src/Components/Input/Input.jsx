import React from 'react'
import './Input.css'

const Input = ({ onValueChange }) => {
  return (
    <input
      onChange={onValueChange}
      className="form-control w-100"
      type="text"
      placeholder="Search"
    />
  )
}

export default Input
