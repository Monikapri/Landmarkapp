import React from 'react'

function Footer() {
    return (
        <div className="Footer ">
            <div className="hrline border-t text-gray-300" ></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 text-center md:text-left">

                <div className="logodiv flex flex-col items-center md:items-start">
                    <svg
                        className="w-auto h-6 text-gray-800 fill-current"
                        viewBox="0 0 194 116"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fillRule="evenodd">
                            <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
                            <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
                        </g>
                    </svg>

                    <div className="text-gray-400 mt-3 max-w-xs">
                        <p>
                            Crafting the next-level of user experience and engagement.
                        </p>
                    </div>
                </div>

                <div>
                    <p className="font-bold">Product</p>

                    <ul className="text-gray-400 list-none p-0 m-0 space-y-2">
                        <li>Features</li>
                        <li>Integrations</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <p className="font-bold">Company</p>

                    <ul className="text-gray-400 list-none p-0 m-0 space-y-2">
                        <li>Features</li>
                        <li>Integrations</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <p className="font-bold">Follow Us</p>

                    <div className="flex justify-center md:justify-start gap-6 mt-4">

                        <a
                            href="https://devdojo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 fill-current"
                            >
                            </svg>
                        </a>

                        <a
                            href="https://devdojo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 fill-current"
                            >

                            </svg>
                        </a>

                        <a
                            href="https://devdojo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 fill-current"
                            >

                            </svg>
                        </a>

                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center text-center text-gray-300 border-t p-4">
                © 2020 Landmark. All rights reserved.
            </div>
        </div>
    )
}

export default Footer