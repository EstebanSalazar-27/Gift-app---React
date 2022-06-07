import React, { useState, useEffect,useContext} from 'react';
import { ListOfGifts } from '../../components/ListOfGifts/ListOfGifts';
import useGifts from '../../hooks/useGifts';
import { SearchBarContext } from '../../context/context';
import { HeaderForSearched } from '../../components/HeadingResults/HeadingResultsSearch';

export const SearchResults = (props) => {
  const {keyword} = props.params
  const { isSearching } = useContext(SearchBarContext)
  const {gifts} = useGifts({keyword})
  

  return (
    <div>
      {
        isSearching 
        ?
        <HeaderForSearched gifts={gifts} keyword={keyword}/>
        :
        null
      }
      <ListOfGifts {...props} />
    </div>
  )
}
