import React, { Suspense, memo, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import Split from '@uiw/react-split'
import { CustomVsCode, EditorVsCode, LoadingComponents, SubmitCode } from '../../../../components'
import { ThemeCode, urlAPI } from '../../../../constants/constVar'
import { useDispatch, useSelector } from 'react-redux'
import { get } from '../../../../services/api/actions'
import { checkLoading } from '../../../../services/redux/slices/loadingState'


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
    const dispatch = useDispatch()

    useEffect(() => {
        if (typeof searchParams.get("category") === 'string' && data === null) {
            get(`/exercise${urlAPI.exercise(searchParams.get("category"), searchParams.get("search"), searchParams.get("param")).replace('detail', '')}`, setData)
        }


        
    }, [searchParams.get("search")])

    useEffect(()=>{
        if (searchParams.get("search") !== null && data === null) {
            dispatch(checkLoading(true))
        }
        else {
            dispatch(checkLoading(false))
        }
    }, [data])


    // Store Code OnChange:
    const storeCodeCurrent = useSelector((state) => state.vsCodeReducer.storeCodeCurrent)
    // useEffect(()=> {
    //     console.log(storeCodeCurrent)
    // }, [storeCodeCurrent])


    return (
        <>{data !== null
            &&
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
                            <Suspense fallback={<LoadingComponents />}>
                                <Outlet context={{ code: data?.code }} />
                            </Suspense>
                        </div>
                        <div className="wrap-section-code md:w-[50%] w-full h-full">
                            <CustomVsCode listItems={ThemeCode} />
                            <EditorVsCode />
                        </div>
                    </Split>

                </div>
                <section className="submit-code mt-14">
                    <SubmitCode code_submit={storeCodeCurrent} param={data?.param} categories='python' />
                </section>
            </>
        }


        </>
    )
}

export default memo(LayoutDetailProblem)