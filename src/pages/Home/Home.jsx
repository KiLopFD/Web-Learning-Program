import React, { memo } from 'react'
import { CarouselFB } from '../../components'

const Home = () => {
  return (
    <>
        <div className="home-section">
            <CarouselFB />
        </div>
    </>
  )
}

export default memo(Home)