import React, { memo } from 'react'
import { Carousel } from 'flowbite-react';
const CarouselFB = () => {
  return (
    <>
            <Carousel className='h-[30rem]'>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Python
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    C++
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    JS
                </div>
            </Carousel>
        </>
  )
}

export default memo(CarouselFB)