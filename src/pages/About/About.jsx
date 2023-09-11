import React, { memo } from 'react'
import { CardFB } from '../../components'

const About = () => {
  return (
    <>
        <div className="wrap-about">
            <CardFB nameCard='Alex Dev' description={`Full Stack Web App:\n\t- Using: TS,Python\n\t- Contact Discord: kilop_dev`} displayContent='static' cta='Kết Bạn Ngay'/>
        </div>
    </>
  )
}

export default memo(About)