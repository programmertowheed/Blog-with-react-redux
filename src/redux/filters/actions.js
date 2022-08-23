import { AUTHORCHANGED, CATEGORYCHANGED, CLEAR, CLEARAUTHOR, CLEARCATEGORY, CLEARSEARCH, SEARCH } from "./actionTypes";

export const authorChanged = (id) => {
    return {
        type: AUTHORCHANGED,
        payload: {
            id,
        },
    };
};

export const categoryChanged = (id) => {
    return {
        type: CATEGORYCHANGED,
        payload: { id },
    };
};

export const search = (text) => {
    let searchText = text ? text : "";
    return {
        type: SEARCH,
        payload: { text: searchText },
    };
};

export const clear = () => {
    return {
        type: CLEAR,
    };
};

export const clearSearch = () => {
    return {
        type: CLEARSEARCH,
    };
};
export const clearCategory = () => {
    return {
        type: CLEARCATEGORY,
    };
};
export const clearAuthor = () => {
    return {
        type: CLEARAUTHOR,
    };
};

