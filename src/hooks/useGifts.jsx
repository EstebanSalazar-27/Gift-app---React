import React, { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifts';


export default function useGifts({keyword}){
    const [loading, setLoading] = useState(false)
    const [gifts, setGifts] = useState([])
    const [lastSearch, setLastSearch] = useState("")
    const [ historySearch, setHistorySearch] = useState([])
    useEffect(() => {
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem("lastKeyword")
        const historyKeyword = localStorage.getItem("HistorySearch")
        setLastSearch(keywordToUse)    
        getGifts(50, 0, keyword).then(data => {
            setGifts(data)
            setLoading(false)
            localStorage.setItem("lastKeyword", [keyword])
            localStorage.setItem("HistorySearch", keyword)
        })
    }, [keyword])
    return {loading, gifts,lastSearch}
}