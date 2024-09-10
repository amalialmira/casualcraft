import { useState } from 'react';

const SortButton = (props) => {
    const {setSort} = props
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative rounded-lg font-[sans-serif] w-max mx-auto">
            <button
                className="px-5 py-1.5 bg-white text-[#333] text-xs font-semibold border-2 border-[#333] outline-none rounded-full" 
                id="dropdownToggle"
                type="button"
                onClick={
                    toggleDropdown
                }
            >
                Sort By
                <svg
                    className={`w-3 fill-[#333] inline ml-3 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        data-original="#000000"
                        fillRule="evenodd"
                    />
                </svg>
            </button>
            {isOpen && (
                <ul
                    className="absolute block shadow-xl bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
                    id="dropdownMenu"
                >
                    <li className="py-2.5 px-5 hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                        <button 
                        onClick={() => {
                            setSort("-createdAt");
                            toggleDropdown()
                        }}>
                        Latest
                        </button>
                    </li>
                    <li className="py-2.5 px-5 hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                    <button
                    onClick={() => {
                        setSort("createdAt");
                        toggleDropdown()
                    }}> 
                        Oldest
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default SortButton;
