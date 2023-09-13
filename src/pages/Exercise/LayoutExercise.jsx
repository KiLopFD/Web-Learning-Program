import React, { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import { LoadingComponents } from '../../components'

const LayoutExercise = () => {
    return (
        <>
            <div className="wrap-LayoutExercise">
                <Suspense fallback={<LoadingComponents />}>
                    <Outlet context={{ urlRoot: 'exercise/' }} />
                </Suspense>
            </div>
        </>
    )
}

export default memo(LayoutExercise)