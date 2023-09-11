import React, { memo } from 'react'
import { FooterFB, Header, NavADS, SideBarFB } from '../components'
import { Outlet } from 'react-router-dom'

const LayoutRoot = () => {
  return (
    <div className='main-web-wrap bg-slate-200 dark:bg-[#111827]'>
      {/* Header */}
      <Header />
      {/* End Header */}
      {/* Main Section  */}
      <main className='pt-10'>

        <div className="wrap-comp flex  items-start">
          <div className="wrap-sidebar">
            <SideBarFB />
          </div>
          <div className="wrap-content px-3 relative w-full min-h-[30rem] h-auto">
            <NavADS />
            <Outlet />
          </div>
        </div>
      </main>
      {/* End Main Section  */}
      {/* Footer Section  */}
      <FooterFB />
      {/* End Footer  */}
    </div>
  )
}

export default memo(LayoutRoot)