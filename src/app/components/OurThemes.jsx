import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import themes from './themesStore.js'
const OurThemes = () => {
    return (
        <div>
            <div className='flex flex-col gap-14 lg:px-40 md:px-20 px-7 py-40 bg-slate-100'>
                <div className='flex justify-between gap-4 flex-wrap'>
                    <h3 className='text-5xl font-semibold'>Our themes</h3>
                    <button className='font-semibold py-3 px-6 bg-white border border-indigo-500 hover:bg-indigo-500 transition duration-300 hover:text-white rounded-md'>View all themes</button>
                </div>
                <div className='flex flex-wrap gap-y-12 justify-center items-center'>
                    {
                        themes.map((e) => {
                            return (
                                <div key={e.id} className='flex flex-wrap flex-col justify-center text-center w-96 px-2'>
                                    <Link href='#'>
                                        <Image src={e.img} className='w-96 h-auto' />
                                        <h1 className='my-2 font-medium'>{e.name}</h1>
                                    </Link>
                                    <p className='opacity-90'>{e.price}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default OurThemes