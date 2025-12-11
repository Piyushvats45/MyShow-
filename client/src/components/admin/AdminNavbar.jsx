import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to='/'>
        <h1 className=' font-bold text-2xl'> <span className='text-red-500'>M</span>yShow</h1></Link>
    </div>
  )
}

export default AdminNavbar
