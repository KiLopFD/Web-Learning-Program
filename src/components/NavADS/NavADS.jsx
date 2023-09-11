import { Button, Tooltip } from 'flowbite-react'
import React, { memo } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

const NavADS = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // const handleNav = ()=>{

    // }
    return (
        <>
            <div className="wrap-nav h-[3rem] pl-10">
                {location.pathname !== '/' && (<>
                    <Tooltip content='Quay về trang trước'>
                        <Button className='w-[2.5rem] h-[2.5rem] rounded-full' gradientMonochrome="purple"
                            onClick={() => { navigate(-1) }}
                        >
                            <AiOutlineArrowLeft className='h-[2rem] w-[1.5rem]' />
                        </Button>
                    </Tooltip>
                </>)}
            </div>
        </>
    )
}

export default memo(NavADS)