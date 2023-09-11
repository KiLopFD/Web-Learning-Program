import React, { memo } from 'react'
import { Button, Tooltip, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { urlAPI } from '../../constants/constVar';


const CardFB = ({
    nameCard = '',
    description = '',
    categoryAPI = '',
    searchAPI = 'list-topic',
    paramAPI = 'all',
    cta='Learn Now',
    imgSrc = '',
    displayContent='absolute'
}) => {

    
    return (
        <>
            <Tooltip content="Học Miễn Phí">
                <Card className='w-[20rem] min-h-[11rem] h-auto overflow-auto relative'>
                    <h5 className="text-2xl font-bold text-gray-700 tracking-tight dark:text-white">
                        {nameCard}
                    </h5>
                    <div className="wrap-desc">
                    {description.split('\n').map((val, index)=>{
                        return <p key={index} className="font-normal text-gray-700 dark:text-gray-400">{val}</p>
                    })}
                    </div>
                    {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p> */}
                    <div className={`wrap-btn ml-auto ${displayContent} bottom-[1.5rem] right-[1.5rem]`}>
                        <Button
                            gradientDuoTone="purpleToPink"
                            outline
                        // onClick={() => handleRouter(router, `${infoCard.urlRoute}`)}
                        >
                            <Link to={urlAPI.exercise(categoryAPI.toLowerCase(), searchAPI.toLowerCase(), paramAPI.toLowerCase())} className='text-black dark:text-white font-sans font-semibold' state={{ data: '' }}>
                                {cta}
                            </Link>
                        </Button>
                    </div>

                </Card>
            </Tooltip>
        </>
    )
}

export default memo(CardFB)