import { Spinner } from 'flowbite-react'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {

    return (
        <>
            <div className="wrap-loading h-screen w-full absolute top-0 left-0 flex place-items-center z-[9999] justify-center">
                <Spinner
                    className='h-[5rem] w-[5rem] relative z-[1]'
                    color={'success'}
                />
                <div className="bg-wrap absolute top-0 left-0 w-full h-full opacity-50 bg-slate-500 z-[0]"></div>
            </div>
        </>
    )
}

export default memo(Loading)