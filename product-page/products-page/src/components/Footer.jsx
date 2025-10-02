import React from 'react'

function Footer() {
  return (
    <div className='bg-blue-300 p-2 text-center text-sm'>
        <p>&copy;{new Date().getFullYear()} | Products_Page. All Rights Reserved 
        </p>
    </div>
  )
}

export default Footer