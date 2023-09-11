import React, { memo, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import Split from '@uiw/react-split'
import { CustomVsCode, EditorVsCode, SubmitCode } from '../../../../components'
import { ThemeCode, urlAPI } from '../../../../constants/constVar'
import { useSelector } from 'react-redux'
import { get } from '../../../../services/api/actions'


/**
 * storeCodeCurrent: is code currently 
 */


const LayoutDetailProblem = () => {
    const location = useLocation()
    // const { data } = location.state
    // const { param } = data
    // Search Params:
    let [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if (typeof searchParams.get("category") === 'string'){
            get(`/exercise${urlAPI.exercise(searchParams.get("category"), searchParams.get("search"), searchParams.get("param")).replace('detail','')}`, setData)
        }

    }, [])
    // Store Code OnChange:
    const storeCodeCurrent = useSelector((state) => state.vsCodeReducer.storeCodeCurrent)
    // useEffect(()=> {
    //     console.log(storeCodeCurrent)
    // }, [storeCodeCurrent])


    return (
        <>{data !== null
            ?
            <>
            <div className="wrap-layout-detail-problem md:h-[35rem] h-auto">
                <Split
                    className='md:flex block flex-wrap w-full h-full'
                    renderBar={({ onMouseDown, ...props }) => {
                        return (
                            <div {...props} style={{ boxShadow: 'none', background: 'transparent' }}>
                                <div onMouseDown={onMouseDown} style={{ backgroundColor: '#ff000057', boxShadow: 'none' }} />
                            </div>
                        );
                    }}
                >
                    <div className="wrap-info-problem h-[35rem] md:w-[49%] w-full pl-3 overflow-y-hidden">
                        <Outlet context={{code : data?.code}}/>
                    </div>
                    <div className="wrap-section-code md:w-[50%] w-full h-full">
                        <CustomVsCode listItems={ThemeCode}/>
                        <EditorVsCode />
                    </div>
                </Split>

            </div>
            <section className="submit-code mt-14">
                <SubmitCode code_submit={storeCodeCurrent} param={data?.param} categories='python' />
            </section>
            </> 
            :
            <>
                <div className="not-found">
                    Loading...
                </div>
            </>
        }
            
            
        </>
    )
}

export default memo(LayoutDetailProblem)