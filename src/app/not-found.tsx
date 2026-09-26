import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20 space-y-5'>
      <h2 className='font-bold text-3xl'>Page not found.</h2>
      <p className='text-[#9CA3AF]'>Cound not find requested resource</p>
      <Link href="/" className='bg-[#ccff00] hover:bg-[#a0cc00] text-black font-semibold px-3 py-1 rounded-md'>Return Home</Link>
    </div>
  )
}

export default NotFound
