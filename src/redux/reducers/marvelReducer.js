import {SET_CHARACTERS, SET_CURRENT_PAGE, SET_LOADING} from "../actions/actions";

const initialState = {
    characters: {},
    currentPage: 1,
    loading: false,
}

export default function marvelReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                loading: false,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state;
    }
}