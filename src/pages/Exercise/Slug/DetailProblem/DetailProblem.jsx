import React, { memo } from 'react'
import { useOutletContext } from 'react-router-dom'
import { TabsFB } from '../../../../components'

const DetailProblem = () => {
  const context = useOutletContext()
  const { code } = context

  return (
    <>
      <div className="detail-problem">
        {code !== undefined ?
          <>
            <TabsFB
              // problem={code.split('\n').map((val, index) => {
              //   return <p key={index}>{val}</p>
              // })}
              problem={code.replaceAll('\n', '\n\n')}
            />
          </>
          :
          <>
            <TabsFB />
          </>
        }


      </div>
    </>
  )
}

export default memo(DetailProblem)