import React from 'react'

const LoadingComponents = ({
    quantity = 5,
    width = 'full'
}) => {
  return (
    <>
        <div className={`wrap-loading w-[${width}]`}>
            {new Array(quantity).map((_, index) => {
                return <div className="loading"></div>
            })}
        </div>
    </>
  )
}

export default memo(LoadingComponents)