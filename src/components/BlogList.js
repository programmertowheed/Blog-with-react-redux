import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Blog from "./Blog";
import categoryDate from "../data/Category";
import authorData from "../data/Author";
import {
    clear,
    clearAuthor,
    clearCategory,
    clearSearch,
} from "../redux/filters/actions";

function BlogList() {
    const blogs = useSelector((state) => state.blogs);
    const { category, author, search } = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const clearAll = () => {
        dispatch(clear());
    };

    const searchHandle = (blog) => {
        if (search) {
            return blog.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    };

    const categoryHandle = (blog) => {
        if (category) {
            return blog.categoryId === category;
        }
        return true;
    };

    const authorHandle = (blog) => {
        if (author) {
            return blog.authorId === author;
        }
        return true;
    };

    const clearSearchHandle = () => {
        dispatch(clearSearch());
    };

    const clearCategoryHandle = () => {
        dispatch(clearCategory());
    };

    const clearAuthorHandle = () => {
        dispatch(clearAuthor());
    };

    return (
        <>
            <section className="relative bg-gray-800 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-gray-800 h-1/3 sm:h-2/3" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                            ALL BLOGS ARE HERE
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-sky-300 sm:mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa libero labore natus atque, ducimus sed.
                        </p>
                    </div>

                    {category || author || search ? (
                        <div className="flex justify-between mt-10 pr-5">
                            <div className="text-white">
                                Search by:
                                {search && (
                                    <span className="relative text-gray-400 bg-gray-900 py-0 px-2 pb-1 rounded ml-3">
                                        {search}
                                        <span
                                            onClick={clearSearchHandle}
                                            className="cursor-pointer flex text-white text-sm absolute bg-red-600 -top-3 -right-3 rounded-full w-5 h-5 justify-center align-center"
                                        >
                                            X
                                        </span>
                                    </span>
                                )}
                                {category && (
                                    <span className="relative text-gray-400 bg-gray-900 py-0 px-2 pb-1 rounded ml-3">
                                        {
                                            categoryDate.filter(
                                                (cat) => cat.id === category
                                            )[0].name
                                        }
                                        <span
                                            onClick={clearCategoryHandle}
                                            className="cursor-pointer flex text-white text-sm absolute bg-red-600 -top-3 -right-3 rounded-full w-5 h-5 justify-center align-center"
                                        >
                                            X
                                        </span>
                                    </span>
                                )}
                                {author && (
                                    <span className="relative text-gray-400 bg-gray-900 py-0 px-2 pb-1 rounded ml-3">
                                        {
                                            authorData.filter(
                                                (auth) => auth.id === author
                                            )[0].name
                                        }
                                        <span
                                            onClick={clearAuthorHandle}
                                            className="cursor-pointer flex text-white text-sm absolute bg-red-600 -top-3 -right-3 rounded-full w-5 h-5 justify-center align-center"
                                        >
                                            X
                                        </span>
                                    </span>
                                )}
                            </div>
                            <div>
                                <button
                                    onClick={clearAll}
                                    className="bg-slate-900 hover:bg-slate-700 text-white px-2 py-1 rounded"
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {/* card grid  */}
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {blogs
                            .filter(authorHandle)
                            .filter(categoryHandle)
                            .filter(searchHandle)
                            ?.map((blog) => (
                                <Blog key={blog.id} blog={blog} />
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogList;
