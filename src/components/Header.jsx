import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#1d0f26ac] w-full h-auto' >
        <div className=" mx-auto container">
            <div className=" flex md:flex-row flex-col items-center justify-between p-3">
                <div className="logo">
                    <h1 className="text-2xl font-bold p-1 text-white">Master Ji 3</h1>
                </div>
                <nav className='md:mt-0 mt-2'>
                    <ul className='flex items-center gap-1'>
                        <li>
                            <Link className='px-1 py-3 font-bold rounded-md text-white hover:bg-white hover:text-black duration-150 ' to={'/'}>Random User </Link>
                        </li>
                        <li>
                            <Link className='px-1 py-3 font-bold rounded-md text-white hover:bg-white hover:text-black duration-150 ' to={'/random-jokes'}>Random Jokies </Link>
                        </li>
                        <li>
                            <Link className='px-1 py-3 font-bold rounded-md text-white hover:bg-white hover:text-black duration-150 ' to={'/cats-listing'}>Cats Listing </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header