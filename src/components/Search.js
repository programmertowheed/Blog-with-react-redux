import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchLogo from "../assets/search.svg";
import { search as searchAction } from "../redux/filters/actions";

function Search() {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.filters);
    const [searchText, setSearchText] = useState(search);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            dispatch(searchAction(searchText));
        }, 500);

        return function () {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }
        };
    }, [dispatch, searchText]);

    useEffect(() => {
        setSearchText(search);
    }, [search]);

    // filter by search
    const handleSearch = (e) => {
        setSearchText(e?.target?.value);
    };

    return (
        <>
            <div className="bg-gray-800 pt-6">
                <div className="border border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
                    <input
                        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                        type="search"
                        name="search"
                        placeholder="Search"
                        value={searchText}
                        onChange={handleSearch}
                    />
                    <img
                        className="inline h-6 cursor-pointer"
                        src={searchLogo}
                        alt="Search"
                    />
                </div>
            </div>
        </>
    );
}

export default Search;
