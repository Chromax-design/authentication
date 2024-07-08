import React from 'react'

const Footer = () => {
  return (
    <p className='text-sm text-center py-10 text-gray-500 bg-gray-50'>
        Copyright &copy; {new Date().getFullYear()} by Chromax dev
    </p>
  )
}

export default Footer