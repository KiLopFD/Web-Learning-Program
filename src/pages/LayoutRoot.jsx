import React, { Suspense, memo } from 'react'
import { FooterFB, Header, NavADS, SideBarFB } from '../components'
import { Outlet } from 'react-router-dom'

const LayoutRoot = () => {
  return (
    <div className='main-web-wrap bg-slate-200 dark:bg-[#111827]'>
      {/* Header */}
      <Suspense fallback={<>Loading...</>}>
        <Header />
      </Suspense>
      {/* End Header */}
      {/* Main Section  */}
      <main className='pt-10'>
        <div className="wrap-comp flex  items-start">
          <div className="wrap-sidebar">
            <Suspense fallback={<>Loading...</>}>
              <SideBarFB />
            </Suspense>
          </div>
          <div className="wrap-content px-3 relative w-full min-h-[30rem] h-auto">
            <Suspense fallback={<>Loading...</>}>
              <NavADS />
            </Suspense>

            <Suspense fallback={<>Loading...</>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </main>
      {/* End Main Section  */}
      {/* Footer Section  */}
      <Suspense fallback={<>Loading...</>}>
        <FooterFB />
      </Suspense>
      {/* End Footer  */}
    </div>
  )
}

export default memo(LayoutRoot)