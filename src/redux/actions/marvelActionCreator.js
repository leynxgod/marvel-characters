import axios from "axios";
import {SET_CHARACTERS, SET_CURRENT_PAGE, SET_LOADING} from "./actions";

export function getCharacters(currentPage) {
    return async (dispatch) => {
        try{
            dispatch(setLoading(true))

            const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=36&offset=${36*(currentPage-1)}&apikey=a5837db97d72016c81a7a776f4240db9`)
            dispatch(setCharacters(response.data.data.results))
        } catch(err) {
            console.log(err)
        }
    }
}

export function getSearch(name, currentPage) {
    return async (dispatch) => {
        if(name !== ''){
            try {
                dispatch(setLoading(true))

                const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=a5837db97d72016c81a7a776f4240db9`)
                dispatch(setCharacters(response.data.data.results))
            } catch(err) {
                console.log(err)
            }
        } else {
            dispatch(setLoading(true))
            dispatch(getCharacters(currentPage))
        }
    }
}

export function setCharacters(characters){
    return {
        type: SET_CHARACTERS,
        payload: characters
    }
}

export function setCurrentPage(currentPage){
    return {
        type: SET_CURRENT_PAGE,
        payload: currentPage
    }
}

export function setLoading(loadingValue){
    return {
        type: SET_LOADING,
        payload: loadingValue
    }
}