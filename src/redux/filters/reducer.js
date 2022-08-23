import {
    AUTHORCHANGED,
    CATEGORYCHANGED,
    CLEAR,
    CLEARAUTHOR,
    CLEARCATEGORY,
    CLEARSEARCH,
    SEARCH,
} from "./actionTypes";

const initialState = {
    category: "",
    author: "",
    search: "",
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORCHANGED:
            return {
                ...state,
                author: action.payload.id,
            };

        case CATEGORYCHANGED:
            return {
                ...state,
                category: action.payload.id,
            };

        case SEARCH:
            return {
                ...state,
                search: action.payload.text,
            };

        case CLEAR:
            return {
                category: "",
                author: "",
                search: "",
            };

        case CLEARSEARCH:
            return {
                ...state,
                search: "",
            };

        case CLEARCATEGORY:
            return {
                ...state,
                category: "",
            };

        case CLEARAUTHOR:
            return {
                ...state,
                author: "",
            };

        default:
            return state;
    }
};

export default reducer;
