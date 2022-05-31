import React from "react";

export const getGifts = async (limit,offset,keyword ="rick and morty") =>{
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=TWo5VaW5b9Z6b9oSJcYBlab53piGasRK&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    const res = await fetch(API_URL)
    const {data} = await res.json()
    return data

}