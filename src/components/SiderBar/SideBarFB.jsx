import React, { memo, useState } from 'react'
import { Button, Sidebar, Tooltip } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiOutlineBars } from 'react-icons/ai'

const SideBarFB = () => {
    const navigate = useNavigate()
    const handleNavigate = (urlRoute) => {
        navigate(urlRoute)
    }
    const [open, setOpen] = useState(true)
    const handleOpen = (open) => {
        setOpen(!open)
    }


    return (
        <>
            {<Sidebar className={`md:block hidden relative duration-150 transition-all ease-linear ${open ? 'w-[15rem]' : 'w-[5rem]'}`}>

                <Button
                    pill
                    className={`absolute top-[0.4rem] right-[-0.6rem] w-[2.5rem] z-[20]`}
                    onClick={() => { handleOpen(open) }}
                    gradientMonochrome="purple"
                >
                    <Tooltip content='Danh Mục'><AiOutlineBars className={`h-5 w-5`} /></Tooltip>

                </Button>
                <Sidebar.Items className=''>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            icon={HiChartPie}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Dashboard
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiViewBoards}
                            onClick={() => { handleNavigate('/exercise') }}
                            className='cursor-pointer'
                        >
                            <p className={`${open ? '' : 'hidden'}`}>Exercise</p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiInbox}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Inbox
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiUser}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Users
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiShoppingBag}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Products
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiArrowSmRight}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Sign In
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiTable}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Sign Up
                            </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            icon={HiChartPie}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Upgrade to Pro
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiViewBoards}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Documentation
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiViewBoards}
                        >
                            <p className={`${open ? '' : 'hidden'}`}>
                                Help
                            </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>}
        </>
    )
}

export default memo(SideBarFB)