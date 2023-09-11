import React, { memo } from 'react'
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { BsFillBookFill } from 'react-icons/bs'
import { MdDashboard } from 'react-icons/md';
import { MarkDown } from '..';

const TabsFB = ({
    problem = 'No content',
    explaination = 'No content',
    solutions = 'No content',
    submissions = 'No content',
}) => {
    return (
        <>
            <div className="wrapoverflow-hidden h-full">

                <Tabs.Group
                    aria-label="Tabs with underline"
                    style="underline"
                    className='overflow-hidden h-full'
                >
                    <Tabs.Item
                        active
                        icon={BsFillBookFill}
                        title="Problem"
                        className=''
                    >
                        <div className="wrap-ctn overflow-y-auto h-[28.75rem] px-2 border-y-2 border-slate-600 pb-10">
                            <MarkDown markdown={problem} className='' />
                        </div>

                    </Tabs.Item>
                    <Tabs.Item
                        icon={MdDashboard}
                        title="Explaination"
                        className=''

                    >
                        {explaination}
                    </Tabs.Item>
                    <Tabs.Item
                        icon={HiAdjustments}
                        title="Solutions"
                        className=''

                    >
                        {solutions}
                    </Tabs.Item>
                    <Tabs.Item
                        icon={HiClipboardList}
                        title="Submissions"
                        className=''

                    >
                        {submissions}
                    </Tabs.Item>
                    {/* <Tabs.Item
                    disabled
                    title="Disabled"
                >
                    <p>
                        Disabled content
                    </p>
                </Tabs.Item> */}
                </Tabs.Group>
            </div>
        </>
    )
}

export default memo(TabsFB)