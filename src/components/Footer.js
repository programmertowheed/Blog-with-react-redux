import React from "react";

function Footer() {
    return (
        <>
            <section className=" bg-gray-900">
                <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 text-sm text-slate-400">
                    <div>Copyright 2022 programmer towheed.</div>
                    <div className="text-sky-600">
                        <a
                            href="https://programmertowheed.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Website
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
