import { Button } from 'flowbite-react'
import React, { memo, useState } from 'react'
import { post } from '../../services/api/actions'
import { ShowTestCases } from '..'

const SubmitCode = ({code_submit, categories = 'python', param}) => {
    const [data, setData] = useState(null)

    const handleSubmit = (code_submit) => {
        post(`submit-code/${categories}/${param}/all`, setData, {code:code_submit})
    }

    return (
        <>
            <div className="wrap-submit-code">
                <div className="inner-submit container mx-auto flex flex-wrap pt-7">
                    <div className="test-case-show md:w-[50%] w-full">
                        <p className='font-semibold text-slate-600'>Test Cases:</p>
                        <div className="show-test-cases">
                            {data !== null ? 
                            <>
                                <ShowTestCases testcases={data}/>
                            </> 
                            : <>
                                <p>Chưa Nộp Bài</p>
                            </>}
                        </div>
                    </div>
                    <div className="buttton-submit w-[50%] md:mt-0 mt-10">
                        <Button
                            className='mx-auto'
                            onClick={() => {handleSubmit(code_submit)}}
                        >
                            Submit Code
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(SubmitCode)