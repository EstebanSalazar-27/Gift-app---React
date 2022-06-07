import React, { useState } from "react";


export const GiftsContext = React.createContext({})


export default function GiftsProvider ({children}){
    const [ gifts, setGifts] = useState([])
    return(
        <GiftsContext.Provider value={{
            gifts,
            setGifts
        }}>
            {children}
        </GiftsContext.Provider>
    )
}
