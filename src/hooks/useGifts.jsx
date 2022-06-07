import React, { useState, useEffect, useContext } from 'react';
import { getGifts } from '../helpers/getGifts';
import { GiftsContext } from '../context/giftsContext';

export default function useGifts({ keyword } = {keyword:null}) {
    const { gifts, setGifts } = useContext(GiftsContext)
    const [loading, setLoading] = useState(false)
    const [lastSearch, setLastSearch] = useState("")
    useEffect(() => {
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem("lastKeyword")
        const historyKeyword = localStorage.getItem("HistorySearch")
        setLastSearch(keywordToUse)
        getGifts(50, 0, keyword).then(data => {
            setGifts(data)
            setLoading(false)
            localStorage.setItem("lastKeyword", keyword)
            localStorage.setItem("HistorySearch", keyword)    
        })
    }, [keyword, setGifts])
    return { loading, gifts, lastSearch }
}