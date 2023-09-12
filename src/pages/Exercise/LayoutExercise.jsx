import React, { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'

const LayoutExercise = () => {
    return (
        <>
            <div className="wrap-LayoutExercise">
                <Suspense fallback={<>Loading...</>}>
                    <Outlet context={{ urlRoot: 'exercise/' }} />
                </Suspense>
            </div>
        </>
    )
}

export default memo(LayoutExercise)