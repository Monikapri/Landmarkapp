import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="flex items-center justify-between p-4 font-bold">

                <div className="flex items-center">
                    <svg
                        className="w-auto h-6 text-indigo-600 fill-current"
                        viewBox="0 0 194 116"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fillRule="evenodd">
                            <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
                            <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
                        </g>
                    </svg>

                    <p className="mb-0 ml-2">
                        Landmark <span>.</span>
                    </p>
                </div>

                <nav className="hidden md:flex items-center gap-4">
                    <a href="" className="p-2 hover:text-red-600">Home</a>
                    <a href="" className="p-2 hover:text-red-600">Features</a>
                    <a href="" className="p-2 hover:text-red-600">Pricing</a>
                    <a href="" className="p-2 hover:text-red-600">Testimonials</a>
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <button className="p-2 text-pink-500">
                        Login
                    </button>

                    <button className="p-2 border rounded bg-blue-600 text-white">
                        Get Started
                    </button>
                </div>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col">
                        <a href="" className="p-3 border-b">
                            Home
                        </a>
                        <a href="" className="p-3 border-b">
                            Features
                        </a>
                        <a href="" className="p-3 border-b">
                            Pricing
                        </a>
                        <a href="" className="p-3 border-b">
                            Testimonials
                        </a>
                    </nav>

                    <div className="flex gap-2 mt-3">
                        <button className="p-2 text-pink-500">
                            Login
                        </button>

                        <button className="p-2 border rounded bg-blue-600 text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;