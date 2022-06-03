import React from "react";
import "./styles.scss"




export const HeaderForSearched = ({keyword,gifts}) =>{

    
    return(
        <div className='busquedas-titles'>
            <h2 className="title-search">Busqueda: {keyword}</h2>
            <h5 className='title-results'>(results {gifts.length})</h5>
        </div>
    )
}