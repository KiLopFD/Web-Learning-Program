import React, { memo } from 'react'
import { Button, DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <header className='container mx-auto'>
                <Navbar
                    fluid
                    rounded
                >
                    <Navbar.Brand to="https://flowbite-react.com">
                        {/* <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                /> */}
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Python Tech
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 gap-2">
                        <Flowbite>
                            <DarkThemeToggle />
                        </Flowbite>
                        <Button gradientMonochrome="purple">
                            Get started
                        </Button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Link to={'/'}>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/exercise'>Exercise</Link>
                    </Navbar.Collapse>
                </Navbar>
            </header>

        </>
    )
}

export default memo(Header)