import React from 'react'
import { GetUserLocation } from './GetUserLocation'
export const ParentContainer = () => {
  return (
    <div className='bg-slate-900 h-screen w-screen'>
        <h1 className='text-white text-3xl font-bold text-center pt-10 md:text-3xl flex align-center justify-center '>Weather App &nbsp;  <span><img src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?_gl=1*1dn6zux*_ga*MTk4NTI1NDY5MC4xNzY1NzMxMzM3*_ga_8JE65Q40S6*czE3NjU3MzEzMzckbzEkZzAkdDE3NjU3MzEzMzckajYwJGwwJGgw" alt="Weather logo" className='h-5 w-10 inline-block rounded' /></span></h1>
        <GetUserLocation />
    </div>
  )
}
