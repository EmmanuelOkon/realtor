import React from 'react'
import {FcGoogle} from "react-icons/fc"

export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-green-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-green-700 active:bg-green-800 rounded-md transition-all shadow-xl'><FcGoogle className='mr-2 text-2xl bg-white rounded-full' /> Continue with Google</button>
  )
}
