import React,{useState} from "react"


export const SearchBarContext = React.createContext({})

export default function SearchProvider({children}){
    const [searchValue, setSearchValue] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    return(
        <SearchBarContext.Provider value={{
            searchValue,
            setSearchValue,
            isSearching,
            setIsSearching
        }}>
             {children}
        </SearchBarContext.Provider>
       
    )
}
