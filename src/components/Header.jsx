import React from 'react'

const Header = () => {
    return (
        <div className="flex flex-row justify-center">
            <img
                className="inset-0 object-scale-down h-60 w-102"
                src="./Minimalist Simple Brand Initial Logo.png"
            />
            <button
                type="button"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Download CV
            </button>
        </div>
    );
}

export default Header