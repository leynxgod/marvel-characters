import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Pagination.scss'
import {getCharacters, setCurrentPage} from "../../redux/actions/marvelActionCreator";

const Pagination = (props) => {

    const list = 44;

    const pageNumberLimit = 4;

    const dispatch = useDispatch()

    const currentPage = useSelector(store => store.marvelReducer.currentPage)

    useEffect(() => {
        dispatch(getCharacters(currentPage))
    }, [dispatch, currentPage])

    const pages = [];

    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    for(let i = 1; i <= list; i++){
        pages.push(i);
    }

    const renderPageNumber = pages.map(number => {
        if ( number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
            return(
                <li
                    className={currentPage === number ? 'page-active' : null}
                    key={number}
                    id={number}
                    onClick={(e) => dispatch(setCurrentPage(Number(e.target.id)))}
                >
                    {number}
                </li>
            );
        } else return null;
    })

    const handlePrevButton = () => {
        dispatch(setCurrentPage(currentPage - 1))
        if ((currentPage - 1 ) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    const handleNextButton = () => {
        dispatch(setCurrentPage(currentPage + 1))
        if (currentPage + 1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    return (
        <div className={props.isSearch === '' ? 'pagination' : 'pagination-hide'}>
            <ul className='pagination-page-numbers'>
                <li>
                    <button onClick={handlePrevButton} disabled={currentPage === pages[0]}>Prev</button>
                </li>
                {minPageNumberLimit >= 1 && <li onClick={() => {
                    dispatch(setCurrentPage(1))
                    setMinPageNumberLimit(0)
                    setMaxPageNumberLimit(4)
                }}
                >
                    1
                </li>
                }
                {minPageNumberLimit >= 1 && <li className='pagination-hellip'>&hellip;</li>}
                {renderPageNumber}
                {pages.length > maxPageNumberLimit && <li className='pagination-hellip'>&hellip;</li>}
                {pages.length > maxPageNumberLimit && <li onClick={() => {
                    dispatch(setCurrentPage(44))
                    setMinPageNumberLimit(40)
                    setMaxPageNumberLimit(44)
                }}
                >
                    44
                </li>
                }
                <li>
                    <button onClick={handleNextButton} disabled={currentPage === pages[pages.length - 1]}>Next</button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;