import React from "react";
import categoryDate from "../data/Category";
import authorData from "../data/Author";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { authorChanged, categoryChanged } from "../redux/filters/actions";

function Blog({ blog }) {
    const dispatch = useDispatch();

    // get category
    const category = categoryDate.filter(
        (cat) => cat.id === blog.categoryId
    )[0];
    // get author
    const author = authorData.filter((auth) => auth.id === blog.authorId)[0];

    // filter by author
    const filterByAuthor = () => {
        dispatch(authorChanged(blog.authorId));
    };

    // filter by category
    const filterByCategory = () => {
        dispatch(categoryChanged(blog.categoryId));
    };

    return (
        <>
            {/* single card  */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src={blog.img}
                        alt={blog.title}
                    />
                </div>
                <div className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <span
                                onClick={filterByCategory}
                                className="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                {category.name}
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p className="text-xl font-semibold text-gray-300">
                                {blog.title}
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div
                            className="cursor-pointer flex-shrink-0"
                            onClick={filterByAuthor}
                        >
                            <img
                                className="h-10 w-10 rounded-full"
                                src={author.img}
                                alt={author.name}
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                onClick={filterByAuthor}
                                className="cursor-pointer text-sm font-medium text-gray-300 hover:underline"
                            >
                                {author.name}
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={blog.created_at}>
                                    <Moment format="D MMM, YYYY">
                                        {blog.create_at}
                                    </Moment>
                                </time>
                                <span aria-hidden="true">·</span>
                                <span>
                                    {Math.floor(Math.random() * 10 + 1)} min
                                    read
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
