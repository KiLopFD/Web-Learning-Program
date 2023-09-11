import React, { memo, useEffect, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Spinner } from 'flowbite-react'
import { useLocation } from 'react-router-dom';


const ShowTestCases = ({ testcases }) => {
    const [loading, setLoading] = useState(0);
    const location = useLocation()
    setTimeout(() => {
        setLoading(1)
    }, 5000);
    useEffect(()=>{
        setLoading(0)
    }, [testcases, location.pathname])
    return (
        <>
            <div className="div-wrap-testcases flex flex-wrap gap-3 pt-5">
                {testcases.length > 0 ? (<>
                    {testcases.map((val, index) => {
                        return <div key={index} className='p-1 min-w-[5rem] rounded-lg flex items-center gap-2 bg-[#0f172a] dark:bg-[#2d3e66]'>
                            {loading === 0 ? <Spinner color="purple" /> : <>
                                {val.result === 'Fail' ? <div className=''>
                                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#ff0000" className='' version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M332 663.2c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l349.6-356c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0L332 663.2z" fill=""></path><path d="M681.6 698.4c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L367.2 307.2c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l349.6 356z" fill=""></path><path d="M516.8 1014.4c-277.6 0-503.2-225.6-503.2-503.2S239.2 7.2 516.8 7.2s503.2 225.6 503.2 503.2-225.6 504-503.2 504z m0-959.2c-251.2 0-455.2 204.8-455.2 456s204 455.2 455.2 455.2 455.2-204 455.2-455.2-204-456-455.2-456z" fill=""></path></g></svg>
                                </div> : <AiFillCheckCircle className='bg-green-400 h-7 w-7 rounded-full' />}
                            </>}

                            <p className='md:text-lg text-sm'>#{index}</p>
                        </div>
                    })}
                </>)
                :
                <>
                    <p>Không tìm thấy test cases</p>
                </>
            }
            </div>
        </>
    )
}

export default memo(ShowTestCases)