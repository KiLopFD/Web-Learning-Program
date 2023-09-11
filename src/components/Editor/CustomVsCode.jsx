import React, { memo, useState } from 'react'
import { Dropdown } from 'flowbite-react';
import { Item } from '..';


const CustomVsCode = ({listItems = []}) => {

    return (
        <>
            <div className="wrap-section-custom-theme pb-3 px-2">
                <Dropdown
                    label="Giao Diện"
                    className='max-h-[20rem] overflow-y-auto w-fit'
                    gradientDuoTone="redToYellow"
                    outline
                >
                    {listItems.map((valTheme, index) => {
                        return <Item key={index}>{valTheme}</Item>
                    })}
                </Dropdown>
            </div>
        </>
    )
}

export default memo(CustomVsCode)