import React, { memo } from 'react'

const LoadingComponents = ({
    quantity = 5,
    width = 'full',
    height = '2rem'
}) => {
  let array = []
  for (let index = 0; index < quantity; index++) {
    array.push(0)
  }
  
  return (
    <>
        <div className={`wrap-loading w-[${width}] relative z-[100]`}>
            {array.map((_, index) => {
                return <div className={`loading h-[${height}] w-full bg-gray-400 mb-[0.5rem] rounded-lg animate-pulse`}></div>
            })}
        </div>
    </>
  )
}

export default memo(LoadingComponents)