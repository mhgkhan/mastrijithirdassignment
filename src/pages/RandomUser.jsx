import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaLocationArrow } from 'react-icons/fa6'
import { IoMdRefresh } from "react-icons/io";
import { IoCallOutline, IoLocationOutline, IoPhoneLandscapeOutline } from 'react-icons/io5';


const RandomUser = () => {


    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchRandomUser = async () => {
        try {
            setLoading(true)

            const fetchingUser = await (await fetch(`https://api.freeapi.app/api/v1/public/randomusers/user/random`)).json();
            setLoading(false)

            console.log(fetchingUser)


            if (fetchingUser.success) {
                setUserData(fetchingUser.data)

            }
            else {
                alert(`'some error occured' `)
            }


        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }


    useEffect(() => {
        fetchRandomUser()
    }, [])

    return (
        <main className='min-h-[80vh]'>

            <div className="container py-5    flex items-center justify-center w-full mx-auto">


                <section className="  md:m-0 m-2 p-3 user-profile md:w-[500px] w-auto rounded-md border-8 border-white bg-violet-400">

                    {
                        loading ? <div className='  w-[20px] h-[20px] rounded-full border border-4 border-r-transparent border-gray-800 mx-auto animate-spin' ></div>
                            : <>

                                <div className="profile-top-area flex w-full items-center justify-between">
                                    <span onClick={()=>window.history.back()} className='text-2xl rounded-full p-2 duration-150 hover:bg-gray-400 hover:text-white cursor-pointer'>< FaArrowLeft /></span>
                                    <span className='text-lg'>Profile Overview </span>
                                    <span onClick={fetchRandomUser} className='text-2xl rounded-full p-2 duration-150 hover:bg-gray-400 hover:text-white cursor-pointer'><IoMdRefresh /></span>
                                </div>


                                <div className="middlearea relative w-full mt-3">

                                    <img src={userData && userData?.picture?.large} alt="" className=' my-2 w-[150px] h-[150px] rounded-full shadow-md shadow-gray-500 mx-auto' />

                                    <h2 className='font-bold text-2xl text-center my-3 mt-4'>{userData && userData?.name?.first} {userData && userData?.name?.last}</h2>

                                    <h3 className="text-center text-xl my-3 mt-4">{userData && userData?.login?.username}</h3>

                                </div>




                                <div className="contact w-full mt-4 border border-1 border-purple-300 border-l-transparent border-r-transparent py-5 flex items-center justify-center gap-5">
                                    <div className="flex items-center justify-center gap-1">
                                        <a target='_blank' href={`https://www.google.com/maps/dir/${userData?.location?.coordinates?.latitude}/${userData?.location?.coordinates?.latitude}/@29.5354965,31.2605945,13z?entry=ttu`} className="flex items-center justify-center gap-1"> <IoLocationOutline className='bg-black text-white py-1 rounded-full text-3xl' /> <span>Location</span> </a>
                                    </div>
                                    <div >
                                        <a href={`tel:+${userData && userData?.phone}`} className="flex items-center justify-center gap-1"> <IoCallOutline className='bg-black text-white py-1 rounded-full text-3xl' /> <span>Call me</span></a>
                                    </div>
                                </div>


                                <div className=" addresss mt-4 w-full p-2">

                                    <div className="row w-full flex items-center justify-between gap-3 mt-2">
                                        <div className="row-item">
                                            <span>City</span>
                                            <h3 className="text-3xl font-bold">{userData && userData?.location?.city}</h3>
                                        </div>
                                        <div className="row-item text-left">
                                            <span>Nationality</span>
                                            <h3 className="text-3xl font-bold">{userData && userData?.location?.country}</h3>
                                        </div>
                                    </div>


                                    <div className="row w-full flex items-center justify-between gap-3 mt-2">
                                        <div className="row-item">
                                            <span>Date of birth</span>
                                            <h3 className="text-3xl font-bold">{new Date(userData && userData?.dob?.date).toLocaleDateString()}</h3>
                                        </div>
                                        <div className="row-item left text-left">
                                            <span>Phone No</span>
                                            <h3 className="text-3xl font-bold">{userData && userData?.cell}</h3>
                                        </div>
                                    </div>


                                    <div className="row w-full flex items-center justify-between gap-3 mt-2">
                                        <div className="row-item">
                                            <span>Time zone </span>
                                            <h3 className="text-3xl font-bold">{userData && userData?.location?.timezone?.offset} </h3>
                                        </div>
                                        <div className="row-item text-left">
                                            <span>Regiester Since </span>
                                            <h3 className="text-3xl font-bold">{userData && userData?.location?.country}</h3>
                                        </div>
                                    </div>



                                </div>


                            </>
                    }

                </section>


            </div>


        </main>
    )
}

export default RandomUser