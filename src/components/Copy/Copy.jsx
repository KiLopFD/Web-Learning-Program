import React, { memo } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const Copy = ({ content }) => {
    return (
        <>
            <button
                className="flex flex-row  top-0 right-0 p-2">
                <span className='m-1 pb-1 basis-3/4 text-xs'>javascript</span>
                <CopyToClipboard text={content}></CopyToClipboard>
            </button>
        </>
    )
}

export default memo(Copy)