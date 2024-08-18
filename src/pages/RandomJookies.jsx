import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoHeartCircle, IoHeartDislikeOutline, IoHeartOutline } from 'react-icons/io5'

const RandomJookies = () => {

  const [jookie, setJookie] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchJokie = async () => {

    try {
      setLoading(true)
      const reqAndres = await fetch(`https://api.freeapi.app/api/v1/public/randomjokes/joke/random`)

      const response = await reqAndres.json();

      console.log(response)
      if (response.success) {
        setJookie(response.data?.content
        )
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJokie()
  }, [])



  return (
    <main className='min-h-[80vh]'>
      <div className="container flex items-center justify-center w-full mx-auto">


        <section className=" p-3 md:mt-12 mt-12 mx-2 jookie md:w-[450px] w-full bg-black text-white rounded-lg relative">

          <a href="https://chaicode.com" className='absolute right-3 bottom-1'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAA6lBMVEUAAAD/kjH/dwD/lDL/lzPx8fHt7e3g4ODn5+fj4+P9eADT09OAgICHh4egoKDb29tiYmLNzc21tbW+vr4rKytQUFCqqqo1NTUeHh4NDQ0TExOYmJiNjY16enrGxsZBQUH/gBfuii5ycnIlEwXefyuxZiJ7RhfUeim6bCRaWloaAQA5GABtMwCeSwSvUwDCXQDgagA/HgCLQQDwcQAAGSDjcxMAABLheSD/iyZwQBRWKQBmNgCTUBBlOhI1P0MjMDdXMQ4ADhkvGQcuAwCOURsbDAJMKg0VJi12PgA/FAAyEQChWRIlAABLIQApQCbnAAAEiklEQVRoge2YaXuaShTHx87CWJBVEDcsiILZGpPee02qSbXRprX5/l/nzqDBNbEMvrjPffy9iQ7458zhbBMATpw4ceLEf5qyrSsN1VFLuntcWUX1NIoxoZImEaLZx1LW655EMJGdum63Km7NdR3SPIJu1a4bGFPDabbWVlWi5fZLLTA1TIy6Xt5Y7snYo/ncUg4s5loz2DbRtrCs97CeQ1o3i1hT9drOuoWlRg1UcCCqXKlrWHJ2N+4qMtYafCtlLPhCbZNga49hukOxsdSs0bqQtEeoU9ldViW2nm6mWnSyS1dMLNWrW4s13ZEw3dyMYWXWViipb0VHS7G4cnMzGoHnZdU2sbXuELdX4nEuO7tBA0wto3adlF4/VnqK40kYa2azte2lBKe4d/ltPGqpDMeTi6ySSJ4alN+8V8FvX9uL61GJUlo0LKeht96/N8C7EfU+LbKK3rPzi8urz9fXtx+X3F5/vrq86LcXl3Wcubg4dLHZi8ul6Id1Fg+5vrpgd/Sy53+L8ty4ud1S/bD1jNsbUKGlg2o7ppMKuHlPeal/9UXKnv8VYv6J+Ie//tYE8l8lLfDPp0OGD3yR/AdlaoI7NBi8rf9pUChACCwjuzhLUxuEkP28wJ7A+JjCvgwG/AIDnjlZ859TpRYzvbAAFtZZ+wZ/qpKAOGjgxPT3QfcNmjVFOTXJAiN0SPxrQIT6fwn3DpqOhj12lwiacdB02HkQHC4U9rsDpsP4kWTPf05VlsG3PabD1QNhNKaqkDhospIX7ZgOo066BkMgkv8JsrbH63DSXYn7QBbI/4SADVTbXof+5GklDoEnkv8Jhrbjdei35wgiBCH3Pfyeuf+n6Li07XUYtjuo89SJo9Bntee+TkTFmenjNa8ntobTGMX9SXs6nZyH6LmEhcVt3FiZDn32EUbTiHnE98NoxB7zHOADA8I7WNL41esonM2YeDzl7xgifzTtFNBcF8z/xHQ2ZiSmQ9SZzniF70yZrwsobvdDxP485DlzmUWXmw4Ld+CJ+xwN21y8C7rJG4h+COZ/QouozHQYnfcjHn4F9HTOowR0ULKfcCwJ5v/CdOL2ERpNuvMOjz7UnSXvFi3f8Vgzc4jzCSlG0d1oNplOQYhGyQuGaf5nH9HXYRPSPYTMC74fxT78tpGz8MyS84i72ARx4uAk5WcbtQx9d4RadIqKH15WtWrS3RC/V+nugSMDfEJK09QfbtRJ9KwQ8RTlsAmpn9YAtFHI0FAX6/8p1XXTN0FzO9f5HyQTUn+/OIwfRI/or7hsQtpvOoy+EKEj+holrP/aO8OwFi3a/1do3iLWd8R9kCv/E9iEdP6GuHD/X8EmpHifY+DPfPmfwCakvV5H946W8Yj+p6ZDNGfnp/z/umQT0rbXWSP9yopmfrewMUNi7WdDGs5BUCS5I5GjY+V3WmHYzOUPz3oeNsSb/waeNo55H+WzXDR/+REYWFaOI51MSL+jKIqHzy/gMXAkbCj54yTFkuzHx8cHXXEMiovOkRyyxCZ4geTVj6vMqQRNRQnscq7GduLEif8//wIGZ2M2F3kkXwAAAABJRU5ErkJggg==" alt="" className='w-[60px] h-[60px] rounded-lg' />
          </a>

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