import React, { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifts';


export default function useGifts({keyword}){
    const [loading, setLoading] = useState(false)
    const [gifts, setGifts] = useState([])

    useEffect(() => {
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem("lastKeyword")
        getGifts(50, 0, keyword).then(data => {
            setGifts(data)
            setLoading(false)
            localStorage.setItem("lastKeyword", keyword)
        })
    }, [keyword])
    return {loading, gifts}
}