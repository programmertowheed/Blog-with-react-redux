import React from "react";
import Logo from "../assets/logo.png";

function Nav() {
    return (
        <>
            <nav className="bg-gray-900 shadow-md">
                <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
                    <a href="/">
                        <img
                            className="h-10"
                            src={Logo}
                            alt="Learn with Sumit"
                        />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Nav;
