import React from 'react'

function Pricing() {
    return (
        <div className="pricing p-4 md:p-8">

            <div className="secheading text-center">
                <p>Our Pricing</p>
            </div>
            <div className="sectitle text-center text-2xl md:text-5xl font-bold mb-6">
                <p>Simple, Transparent Pricing for Everyone</p>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-3 gap-6 p-4 justify-items-center ">

                <div className="card1 shadow-lg hover:shadow-2xl transition-shadow w-full max-w-sm rounded-2xl bg-white p-6 text-center min-h-[450px] space-y-5">

                    <div className="card1title">
                        <span className="font-semibold">Basic</span> Plan
                    </div>

                    <div className="card1price font-extrabold text-2xl mt-3">
                        $48
                    </div>

                    <div className="card1text text-gray-400 p-4">
                        In our basic plan you can take advantage of all these features below.
                    </div>

                    <div className="card1feature text-left">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2"><svg className="w-6 h-6 align-middle text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>Awesome Feature</li>
                            <li className="flex items-center gap-2"><svg className="w-6 h-6 align-middle text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>And Another Cool Feature</li>
                            <li className="flex items-center gap-2"><svg className="w-6 h-6 align-middle text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>One More Feature</li>
                        </ul>
                    </div>

                    <div className="card1button text-center mt-6">
                        <button className="bg-black rounded text-white p-3 hover:bg-green-600">
                            Select this plan
                        </button>
                    </div>

                </div>
                <div className="card2 w-full max-w-sm md:scale-105 rounded-2xl bg-white p-6 text-center shadow-2xl transition-transform duration-300">
                    <div className="mostused -mx-4 sm:-mx-6 -mt-4 sm:-mt-6">
                        <span className="block w-full bg-blue-500 text-white py-3 text-center rounded-t-2xl">
                            Most Popular
                        </span>
                    </div>

                    <div className="card1title">
                        <span className="font-semibold">Basic</span> Plan
                    </div>

                    <div className="card1price font-extrabold text-2xl mt-3">
                        $48
                    </div>

                    <div className="card1text text-gray-400 p-4">
                        In our basic plan you can take advantage of all these features below.
                    </div>

                    <div className="card1feature text-left">
                        <ul className="space-y-3">

                            <li className="flex items-center gap-2">
                                <svg
                                    className="w-6 h-6 shrink-0 text-green-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>Awesome Feature</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <svg
                                    className="w-6 h-6 shrink-0 text-green-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>And Another Cool Feature</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <svg
                                    className="w-6 h-6 shrink-0 text-green-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>One More Feature</span>
                            </li>

                        </ul>
                    </div>

                    <div className="card1button text-center mt-6">
                        <button className="sm:w-auto bg-black rounded text-white px-5 py-3 hover:bg-green-600">
                            Select this plan
                        </button>
                    </div>

                </div>
                <div className="card3 shadow-lg hover:shadow-2xl transition-shadow w-full max-w-sm rounded-2xl bg-white p-6 text-center min-h-[450px] space-y-5">

                    <div className="card1title">
                        <span className="font-semibold">Basic</span> Plan
                    </div>

                    <div className="card1price font-extrabold text-2xl mt-3">
                        $48
                    </div>

                    <div className="card1text text-gray-400 p-4">
                        In our basic plan you can take advantage of all these features below.
                    </div>

                    <div className="card1feature text-left">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2"><svg className="w-6 h-6 align-middle text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>Awesome Feature</li>
                            <li className="flex items-center gap-2"><svg className="w-6 h-6 align-middle text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>And Another Cool Feature</li>
                            <li className="flex items-center gap-2"><svg className="w-6 h-6 align-middle text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>One More Feature</li>
                        </ul>
                    </div>

                    <div className="card1button text-center mt-6">
                        <button className="bg-black rounded text-white p-3 hover:bg-green-600">
                            Select this plan
                        </button>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Pricing