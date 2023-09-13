import React, { Suspense, memo } from 'react'
import { FooterFB, Header, Loading, LoadingComponents, NavADS, SideBarFB } from '../components'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LayoutRoot = () => {
  const isLoading = useSelector((state) => state.loadingState.isLoading)
  return (
    <div className='main-web-wrap bg-slate-200 dark:bg-[#111827] relative'>
      {/* Loading  */}
      {/* <LoadingComponents /> */}
      {/* { isLoading && <LoadingComponents /> } */}
      {/* End Loading  */}
      {/* Header */}
      <Suspense fallback={<LoadingComponents />}>
        <Header />
      </Suspense>
      {/* End Header */}
      {/* Main Section  */}
      <main className='pt-10'>
        <div className="wrap-comp flex  items-start">
          <div className="wrap-sidebar">
            <Suspense fallback={<LoadingComponents />}>
              <SideBarFB />
            </Suspense>
          </div>
          <div className="wrap-content px-3 relative w-full min-h-[30rem] h-auto">
            <Suspense fallback={<LoadingComponents />}>
              <NavADS />
            </Suspense>

            <Suspense fallback={<LoadingComponents />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </main>
      {/* End Main Section  */}
      {/* Footer Section  */}
      <Suspense fallback={<LoadingComponents />}>
        <FooterFB />
      </Suspense>
      {/* End Footer  */}
    </div>
  )
}

export default memo(LayoutRoot)