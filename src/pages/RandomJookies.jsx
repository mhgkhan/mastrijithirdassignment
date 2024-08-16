import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoHeartCircle, IoHeartDislikeOutline, IoHeartOutline } from 'react-icons/io5'

const RandomJookies = () => {

  const [jookie, setJookie] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchJokie = async () => {

    try {
      setLoading(true)
      const reqAndres = await (await fetch(`https://api.freeapi.app/api/v1/public/randomjokes/joke/random`)).json();
      console.log(reqAndres)
      setLoading(false)
      if (reqAndres.success) {
        setJookie(reqAndres.data?.content
        )
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJokie()
  }, [])



  return (
    <main className='min-h-[80vh]'>
      <div className="container flex items-center justify-center w-full mx-auto">


        <section className=" p-3 md:mt-12 mt-12 mx-2 jookie md:w-[450px] w-full bg-black text-white rounded-lg">

          <div className="post-top flex items-center justify-start gap-3 w-full py-5 px-4 ">
            <FaArrowLeft className='text-lg' />
            <span className='text-xl font-bold'>Post</span>
          </div>

          <div className="profile-block w-full mt-2 flex items-center justify-between px-4">
            <div className="profile-info flex items-center gap-2">
              <img src="https://s3-alpha-sig.figma.com/img/8f9a/a88a/f84c0b0523188e60955912d822eb8566?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TflSxcOuYvBBhd7DP5-EEvfmStahk1UXCrBXsBa2yreh5N31fFUYFU6mfPu4dW9SRJ8dQbWTekDymGUruTPembAFDp2sQB0MODjP3Ow26cCMcKrMSE1kv8JTJ56ARUW338d5b3LglPHXxa9t8Sj4GDSFcuh4q0~lQE94yPtD3~e7OlcDaKQ9DJnh7jiF5~hKbpY57zhMZjBevAKNKA7D8ndmCbgdirYz~HdH3lPCY6o0yCGCJqgD5OperbezopeI5TawIP1jgAYQ0Rc0bachZslA1cbjAfHFKpc1f0cuHBWKbjNpYdi6i1cRhX2UchW9eK00JtPMV-e79nc3-hSKGA__" className='w-[50px] h-[50px] rounded-full' />
              <div className="dat">
                <h3 className='font-bold text-lg'>Elon Musk </h3>
                <span className=' text-gray-400 text-sm block mt-[-5px]'>@elonmusk</span>
              </div>
            </div>
          </div>

          <div className="joke mt-3 px-4">
            {
              loading ? <div className='  w-[20px] h-[20px] rounded-full border border-4 border-r-transparent border-gray-800 mx-auto animate-spin' ></div> : <>
                <p className='text-lg'>{jookie}</p>

              </>
            }

          </div>
          <div className="timestamps w-full mt-4 px-4 flex items-center gap-3 text-sm text-gray-400">
            <span>11:18 PM</span>
            <span>Jul 30, 2024</span>
            <span><span className='text-white'>20.5M</span> Views</span>
          </div>

          <div className="mt-3 analytics border-1 border text-gray-500 border-gray-600 border-l-transparent border-r-transparent px-4 py-2 flex items-center justify-between">
            <span className="flex items-center text-sm gap-1">
              <IoHeartOutline /> <span>4.9K</span>
            </span>
            <span className="flex items-center text-sm gap-1">
              <IoHeartOutline /> <span>4.9K</span>
            </span>
            <span className="flex items-center text-sm gap-1">
              <IoHeartOutline /> <span>4.9K</span>
            </span>
            <span className="flex items-center text-sm gap-1">
              <IoHeartOutline /> <span>4.9K</span>
            </span>
          </div>


          <div className="copyright p-4 text-gray-500 text-sm text-center " >
            &copy; <a href="chaicode.com">chai our code</a>
          </div>

        </section>



      </div>
    </main>
  )
}

export default RandomJookies