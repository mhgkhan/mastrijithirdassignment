import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const Catlisting = () => {

    const [catsData, setCatsData] = useState([])

    const [loading, setLoading] = useState(false)

    const [counter, setCounter] = useState(1)


    const fetchCats = async (counter) => {
        try {
            // https://api.freeapi.app/api/v1/public/cats?page=1&limit=4
            setLoading(true)
            const reqAndres = await (await fetch(`https://api.freeapi.app/api/v1/public/cats?page=${counter}&limit=4`)).json()

            setLoading(false)
            if (reqAndres.success) {
                setCatsData(reqAndres.data.data)
            }
            console.log(reqAndres.data.data)


        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCats(counter);
    }, [])

    return (
        <main className='min-h-[80vh]'>
            <div className="container mx-auto">


                <div className="header-area flex items-center justify-between">
                    <h1 className="text-3xl font-bold my-5 p-4 text-white">Cate Listing </h1>
                    <a href="https://chaicode.com">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAA6lBMVEUAAAD/kjH/dwD/lDL/lzPx8fHt7e3g4ODn5+fj4+P9eADT09OAgICHh4egoKDb29tiYmLNzc21tbW+vr4rKytQUFCqqqo1NTUeHh4NDQ0TExOYmJiNjY16enrGxsZBQUH/gBfuii5ycnIlEwXefyuxZiJ7RhfUeim6bCRaWloaAQA5GABtMwCeSwSvUwDCXQDgagA/HgCLQQDwcQAAGSDjcxMAABLheSD/iyZwQBRWKQBmNgCTUBBlOhI1P0MjMDdXMQ4ADhkvGQcuAwCOURsbDAJMKg0VJi12PgA/FAAyEQChWRIlAABLIQApQCbnAAAEiklEQVRoge2YaXuaShTHx87CWJBVEDcsiILZGpPee02qSbXRprX5/l/nzqDBNbEMvrjPffy9iQ7458zhbBMATpw4ceLEf5qyrSsN1VFLuntcWUX1NIoxoZImEaLZx1LW655EMJGdum63Km7NdR3SPIJu1a4bGFPDabbWVlWi5fZLLTA1TIy6Xt5Y7snYo/ncUg4s5loz2DbRtrCs97CeQ1o3i1hT9drOuoWlRg1UcCCqXKlrWHJ2N+4qMtYafCtlLPhCbZNga49hukOxsdSs0bqQtEeoU9ldViW2nm6mWnSyS1dMLNWrW4s13ZEw3dyMYWXWViipb0VHS7G4cnMzGoHnZdU2sbXuELdX4nEuO7tBA0wto3adlF4/VnqK40kYa2azte2lBKe4d/ltPGqpDMeTi6ySSJ4alN+8V8FvX9uL61GJUlo0LKeht96/N8C7EfU+LbKK3rPzi8urz9fXtx+X3F5/vrq86LcXl3Wcubg4dLHZi8ul6Id1Fg+5vrpgd/Sy53+L8ty4ud1S/bD1jNsbUKGlg2o7ppMKuHlPeal/9UXKnv8VYv6J+Ie//tYE8l8lLfDPp0OGD3yR/AdlaoI7NBi8rf9pUChACCwjuzhLUxuEkP28wJ7A+JjCvgwG/AIDnjlZ859TpRYzvbAAFtZZ+wZ/qpKAOGjgxPT3QfcNmjVFOTXJAiN0SPxrQIT6fwn3DpqOhj12lwiacdB02HkQHC4U9rsDpsP4kWTPf05VlsG3PabD1QNhNKaqkDhospIX7ZgOo066BkMgkv8JsrbH63DSXYn7QBbI/4SADVTbXof+5GklDoEnkv8Jhrbjdei35wgiBCH3Pfyeuf+n6Li07XUYtjuo89SJo9Bntee+TkTFmenjNa8ntobTGMX9SXs6nZyH6LmEhcVt3FiZDn32EUbTiHnE98NoxB7zHOADA8I7WNL41esonM2YeDzl7xgifzTtFNBcF8z/xHQ2ZiSmQ9SZzniF70yZrwsobvdDxP485DlzmUWXmw4Ld+CJ+xwN21y8C7rJG4h+COZ/QouozHQYnfcjHn4F9HTOowR0ULKfcCwJ5v/CdOL2ERpNuvMOjz7UnSXvFi3f8Vgzc4jzCSlG0d1oNplOQYhGyQuGaf5nH9HXYRPSPYTMC74fxT78tpGz8MyS84i72ARx4uAk5WcbtQx9d4RadIqKH15WtWrS3RC/V+nugSMDfEJK09QfbtRJ9KwQ8RTlsAmpn9YAtFHI0FAX6/8p1XXTN0FzO9f5HyQTUn+/OIwfRI/or7hsQtpvOoy+EKEj+holrP/aO8OwFi3a/1do3iLWd8R9kCv/E9iEdP6GuHD/X8EmpHifY+DPfPmfwCakvV5H946W8Yj+p6ZDNGfnp/z/umQT0rbXWSP9yopmfrewMUNi7WdDGs5BUCS5I5GjY+V3WmHYzOUPz3oeNsSb/waeNo55H+WzXDR/+REYWFaOI51MSL+jKIqHzy/gMXAkbCj54yTFkuzHx8cHXXEMiovOkRyyxCZ4geTVj6vMqQRNRQnscq7GduLEif8//wIGZ2M2F3kkXwAAAABJRU5ErkJggg==" alt="" className='w-[60px] h-[60px] rounded-lg' />
                    </a>

                </div>


                <div className="listing-container flex items-center justify-center gap-5 flex-wrap">



                    {
                        loading ? <>
                            <div className='  w-[20px] h-[20px] rounded-full border border-4 border-r-transparent border-white mx-auto animate-spin' ></div>
                        </>
                            : catsData && catsData.map((element, index) => {
                                return <div key={index} className='w-[300px] bg-white shadow-md shadow-gray-800 p-2 pb-0 rounded-md border border4 border-black h-[550px]' >

                                    <img src={element?.image} alt="" className='w-full rounded-md h-[260px]' />
                                    <div className="content w-full p-2">
                                        <h1 className="text-2xl font-bold">{element?.name}</h1>
                                        <p className='mt-1 text-sm'>{element?.description.substring(0, 100)}</p>
                                    </div>

                                    <div className=" w-full flex items-center gap-7 text-sm">
                                        <p className='font-bold'>Origin</p>
                                        <p>{element?.origin}</p>
                                    </div>

                                    <div className="treatment">
                                        <p className="font-bold">Treatement</p>
                                        <div className="treatemtns flex items-center justify-start gap-1 flex-wrap">
                                            {element?.temperament.split(" ").map((ele, ind) => {
                                                return <p key={ind} className='text-sm p-1 rounded-lg hover:bg-purple-600 hover:text-white'>{ele}</p>
                                            })}

                                        </div>
                                        <div className="life-span flex items-center gap-2">
                                            <p className="font-bold">Life Span</p>
                                            <p>{element?.life_span}</p>
                                        </div>

                                        <a href={element?.wikipedia_url} className='mt-2 text-blue-500'>Learn More </a>
                                    </div>
                                </div>
                            })
                    }




                </div>



                <div className="pagination w-full p-4 flex items-center justify-end gap-5">
                    <button className="w-auto p-2 flex items-center gap-2  rounded-md shadow-md shadow-gray-800 text-white bg-gray-900 hover:bg-white hover:text-black" onClick={() => {
                        setCounter(counter == 1 ? counter : counter - 1)
                        fetchCats(counter)
                    }}> <FaArrowLeft />  Prev </button>
                    <button className="w-auto p-2 flex items-center gap-2  rounded-md shadow-md shadow-gray-800 text-white bg-gray-900 hover:bg-white hover:text-black"
                        onClick={() => {
                            setCounter(counter + 1)
                            fetchCats(counter)
                        }}
                    >Next <FaArrowRight /> </button>
                </div>

            </div>
        </main>
    )
}

export default Catlisting