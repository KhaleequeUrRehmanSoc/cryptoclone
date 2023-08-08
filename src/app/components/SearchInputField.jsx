import React from 'react'

const SearchSvg = ({color="#FFFFFF"}) => {
    return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.5583 16.8083C13.3884 17.5624 11.9953 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.0619 17.5226 13.5122 16.7057 14.7131L20.5607 18.568C21.1464 19.1538 21.1464 20.1036 20.5607 20.6893C19.9749 21.2751 19.0251 21.2751 18.4393 20.6893L14.5607 16.8107C14.5599 16.8099 14.5591 16.8091 14.5583 16.8083Z" fill={color} /></svg>
    )
}

const SearchInputField = ({variant,iconColor}) => {
    
  return (
    <> 
       { 
       variant === "dark" ?
        <>
            <div className="relative w-full ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchSvg />
                </div>
                <input type="search" className="bg-transparent border border-[#3B3C43] text-white placeholder:text-[#e3e3e3] outline-0 text-sm rounded-[50px] block w-full min-w-[20.875rem] pl-10 p-2.5" placeholder="Search" required />
            </div>
        </>
        :
        <>
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchSvg color={iconColor} />
            </div>
            <input type="search" className="bg-transparent border border-[#3B3C43] text-black outline-0 text-sm rounded-[50px] block w-full min-w-[20.875rem] pl-10 p-2.5" placeholder="Search by name or description" required />
        </div>
        </>
        }
    </>
  )
}

export default SearchInputField



































{/* <form className="flex items-center" onSubmit={(e)=> e.preventDefault()}>   
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
        </button>
        </form> */}
