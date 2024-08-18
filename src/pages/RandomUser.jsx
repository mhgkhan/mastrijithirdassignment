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

            const fetchingUser = await fetch(`https://api.freeapi.app/api/v1/public/randomusers/user/random`);

            const response = await fetchingUser.json()
            console.log(response)


            if (response.success) {
                setUserData(response.data)

            }
            else {
                alert(`'some error occured' `)
            }


        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchRandomUser()
    }, [])

    return (
        <main className='min-h-[80vh]'>

            <div className="container py-5    flex items-center justify-center w-full mx-auto">


                <section className="  md:m-0 m-2 p-3 user-profile md:w-[500px] w-auto rounded-md border-8 border-white bg-violet-400 relative">


                    {
                        loading ? <div className='  w-[20px] h-[20px] rounded-full border border-4 border-r-transparent border-gray-800 mx-auto animate-spin relative' ></div>
                            : <>
                                <a href="https://chaicode.com" className='absolute right-3 bottom-1'>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAA6lBMVEUAAAD/kjH/dwD/lDL/lzPx8fHt7e3g4ODn5+fj4+P9eADT09OAgICHh4egoKDb29tiYmLNzc21tbW+vr4rKytQUFCqqqo1NTUeHh4NDQ0TExOYmJiNjY16enrGxsZBQUH/gBfuii5ycnIlEwXefyuxZiJ7RhfUeim6bCRaWloaAQA5GABtMwCeSwSvUwDCXQDgagA/HgCLQQDwcQAAGSDjcxMAABLheSD/iyZwQBRWKQBmNgCTUBBlOhI1P0MjMDdXMQ4ADhkvGQcuAwCOURsbDAJMKg0VJi12PgA/FAAyEQChWRIlAABLIQApQCbnAAAEiklEQVRoge2YaXuaShTHx87CWJBVEDcsiILZGpPee02qSbXRprX5/l/nzqDBNbEMvrjPffy9iQ7458zhbBMATpw4ceLEf5qyrSsN1VFLuntcWUX1NIoxoZImEaLZx1LW655EMJGdum63Km7NdR3SPIJu1a4bGFPDabbWVlWi5fZLLTA1TIy6Xt5Y7snYo/ncUg4s5loz2DbRtrCs97CeQ1o3i1hT9drOuoWlRg1UcCCqXKlrWHJ2N+4qMtYafCtlLPhCbZNga49hukOxsdSs0bqQtEeoU9ldViW2nm6mWnSyS1dMLNWrW4s13ZEw3dyMYWXWViipb0VHS7G4cnMzGoHnZdU2sbXuELdX4nEuO7tBA0wto3adlF4/VnqK40kYa2azte2lBKe4d/ltPGqpDMeTi6ySSJ4alN+8V8FvX9uL61GJUlo0LKeht96/N8C7EfU+LbKK3rPzi8urz9fXtx+X3F5/vrq86LcXl3Wcubg4dLHZi8ul6Id1Fg+5vrpgd/Sy53+L8ty4ud1S/bD1jNsbUKGlg2o7ppMKuHlPeal/9UXKnv8VYv6J+Ie//tYE8l8lLfDPp0OGD3yR/AdlaoI7NBi8rf9pUChACCwjuzhLUxuEkP28wJ7A+JjCvgwG/AIDnjlZ859TpRYzvbAAFtZZ+wZ/qpKAOGjgxPT3QfcNmjVFOTXJAiN0SPxrQIT6fwn3DpqOhj12lwiacdB02HkQHC4U9rsDpsP4kWTPf05VlsG3PabD1QNhNKaqkDhospIX7ZgOo066BkMgkv8JsrbH63DSXYn7QBbI/4SADVTbXof+5GklDoEnkv8Jhrbjdei35wgiBCH3Pfyeuf+n6Li07XUYtjuo89SJo9Bntee+TkTFmenjNa8ntobTGMX9SXs6nZyH6LmEhcVt3FiZDn32EUbTiHnE98NoxB7zHOADA8I7WNL41esonM2YeDzl7xgifzTtFNBcF8z/xHQ2ZiSmQ9SZzniF70yZrwsobvdDxP485DlzmUWXmw4Ld+CJ+xwN21y8C7rJG4h+COZ/QouozHQYnfcjHn4F9HTOowR0ULKfcCwJ5v/CdOL2ERpNuvMOjz7UnSXvFi3f8Vgzc4jzCSlG0d1oNplOQYhGyQuGaf5nH9HXYRPSPYTMC74fxT78tpGz8MyS84i72ARx4uAk5WcbtQx9d4RadIqKH15WtWrS3RC/V+nugSMDfEJK09QfbtRJ9KwQ8RTlsAmpn9YAtFHI0FAX6/8p1XXTN0FzO9f5HyQTUn+/OIwfRI/or7hsQtpvOoy+EKEj+holrP/aO8OwFi3a/1do3iLWd8R9kCv/E9iEdP6GuHD/X8EmpHifY+DPfPmfwCakvV5H946W8Yj+p6ZDNGfnp/z/umQT0rbXWSP9yopmfrewMUNi7WdDGs5BUCS5I5GjY+V3WmHYzOUPz3oeNsSb/waeNo55H+WzXDR/+REYWFaOI51MSL+jKIqHzy/gMXAkbCj54yTFkuzHx8cHXXEMiovOkRyyxCZ4geTVj6vMqQRNRQnscq7GduLEif8//wIGZ2M2F3kkXwAAAABJRU5ErkJggg==" alt="" className='w-[60px] h-[60px] rounded-lg' />
                                </a>





                                <div className="profile-top-area flex w-full items-center justify-between">
                                    <span onClick={() => window.history.back()} className='text-2xl rounded-full p-2 duration-150 hover:bg-gray-400 hover:text-white cursor-pointer'>< FaArrowLeft /></span>
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

                                <br /><br />
                                <p className='text-white text-center'>&copy; chai our code </p>

                            </>
                    }

                </section>


            </div>


        </main>
    )
}

export default RandomUser