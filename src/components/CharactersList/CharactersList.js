import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Input, CircularProgress} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {getCharacters, getSearch} from "../../redux/actions/marvelActionCreator";
import './CharactersList.scss'
import Character from "../Character/Character";
import Pagination from "../Pagination/Pagination";

const CharactersList = () => {

    const dispatch = useDispatch()

    const list = useSelector(store => store.marvelReducer.characters)

    const isLoading = useSelector(store => store.marvelReducer.loading)

    const currentPage = useSelector(store => store.marvelReducer.currentPage)

    const [isSearch, setIsSearch] = useState('')

    return (
        <div className='character-list'>
            <div className='character-list-title'>
                Marvel Characters List
            </div>
            <div className='character-list-search'>
                <Input
                    placeholder='SEARCH'
                    error
                    value={isSearch}
                    onChange={(e) => {
                        dispatch(getSearch(e.target.value, currentPage))
                        setIsSearch(e.target.value)
                }}
                />
                <span>
                    {
                        isSearch === '' ? null :
                            <CloseIcon onClick={() => {
                                dispatch(getCharacters(currentPage))
                                setIsSearch('')
                            }}
                            />
                    }
                </span>
            </div>
            <div className='character-list-characters'>
                {isLoading ? <div className='character-list-loading'><CircularProgress/></div> :
                    list.length > 0 &&
                    list.map(item => (
                        <div key={item.id}>
                            <Character
                                name = {item.name}
                                thumbnail = {item.thumbnail}
                                description = {item.description}
                            />
                        </div>
                    ))
                }
            </div>
                {list.length === 0 && isSearch !== '' ? <div className='character-list-not-found'>Characters not found</div> : null}
            <Pagination
                isSearch = {isSearch}
            />
        </div>
    );
};

export default CharactersList;