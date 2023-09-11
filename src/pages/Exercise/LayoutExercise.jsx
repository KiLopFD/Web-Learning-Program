import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const LayoutExercise = () => {
    return (
        <>
            <div className="wrap-LayoutExercise">
                <Outlet context={{urlRoot:'exercise/'}} />
            </div>
        </>
    )
}

export default memo(LayoutExercise)