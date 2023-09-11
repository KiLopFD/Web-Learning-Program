import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../services/redux/slices/vsCodeSlice'

const Item = ({ children }) => {
    // const lang = useSelector((state) => state.vsCodeReducer.lang)
    // const theme = useSelector((state) => state.vsCodeReducer.theme)

    // Dispatcher
    const dispatch = useDispatch()
    //
    const handleSelected = (children) => {
        dispatch(setTheme(children))
    }
    return (
        <>
            <div onClick={() => { handleSelected(children) }} className="wrap-item-child cursor-pointer hover:bg-slate-200 p-1 dark:hover:bg-cyan-700">
                {children}
            </div>
        </>
    )
}

export default memo(Item)