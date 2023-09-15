import React, { memo, useEffect, useState } from 'react'
import { ExerciseConst, urlAPI } from '../../../constants/constVar';
import { CardFB } from '../../../components';
import { useLocation, useSearchParams } from 'react-router-dom';
import { get } from '../../../services/api/actions';
import { useDispatch } from 'react-redux';
import { checkLoading } from '../../../services/redux/slices/loadingState';


// index Route
const AllCategoriesExercise = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)
    const location = useLocation()
    const pathname = location.pathname
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        if (typeof searchParams.get("category") === 'string') {
            get(`/exercise${urlAPI.exercise(searchParams.get("category"), searchParams.get("search"), searchParams.get("param"))}`, setData)
        }

        if (searchParams.get("search") !== null && data === null)
        {
            dispatch(checkLoading(true))
        }
        else{
            dispatch(checkLoading(false))
        }

    }, [searchParams.get("search")])

    useEffect(()=>{
        if (searchParams.get("search") !== null && data === null)
        {
            dispatch(checkLoading(true))
        }
        else{
            dispatch(checkLoading(false))
        }
    }, [data])



    const dispatch = useDispatch()

    return (
        <>
            {searchParams.get("search") === null &&
                <>
                    {ExerciseConst.map((val, index) => {
                        return <CardFB key={index} nameCard={val.name} categoryAPI={val.name} paramAPI='all' />
                    })}
                </>
            }

            {searchParams.get("search") === 'list-topic' && data !== null &&
                <>
                    <div className="list-topic flex gap-3 flex-wrap">
                        {data.map((val, index) => {
                            return <CardFB key={index} nameCard={val.title} categoryAPI={searchParams.get("category")} searchAPI='list-problems-in-topic' paramAPI={val.param} />
                        })}
                    </div>

                </>
            }
            {searchParams.get("search") === 'list-problems-in-topic' && data !== null &&
                <>
                    <div className="list-problems-in-topic flex gap-3 flex-wrap">
                        {data.map((val, index) => {
                            return <CardFB key={index} nameCard={val.title} categoryAPI={searchParams.get("category")} searchAPI='detail' paramAPI={val.param} />
                        })}
                    </div>
                </>
            }
            
        </>
    )
}

export default memo(AllCategoriesExercise)