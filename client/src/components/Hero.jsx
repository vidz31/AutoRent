import React, {useState} from 'react'
import assets, { cityList } from '../assets/assets'

const Hero = () => {

    const [pickUpLocation, setPickUpLocation] = useState('')

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-100 text-center gap-14'>
        <h1 className='text-4xl md:text-5xl font-semibold'>Luxury Cars on Rent</h1>

        <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-r rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_(0,0,0,0.1)] px-4'>

            <div className='flex flex-col md:flex-row md:ml-8 items-start md:items-center gap-10 p-4'>
                <div className='flex flex-col items-start gap-1'>
                    <select required value={pickUpLocation} onChange={(e)=>{setPickUpLocation(e.target.value)}}>
                        <option value="">PickUp Location</option>
                        {cityList.map((city) => <option key={city} value={city}>{city}</option>)}
                    </select>
                    <p className='px-1 text-sm text-gray-500'>{pickUpLocation ? pickUpLocation : "Please Select Location"}</p>
                </div>

                <div className='flex flex-col items-start gap-1'>
                    <label htmlFor="Pick Up Date">Pick Up Date</label>
                    <input type="date" id="pickUpDate" min={new Date().toISOString().split("T")[0]} className='text-sm text-gray-500' required/>
                </div>

                <div className='flex flex-col items-start gap-1'>
                    <label htmlFor="Return Date">Return Date</label>
                    <input type="date" id="returnDate" min={new Date().toISOString().split("T")[0]} className='text-sm text-gray-500' required/>
                </div>


            </div>

            <button className='flex items-center justify-center gap-1 px-10  py-3 max-sm:mt-4 bg-[#255a8a] text-white rounded-full hover:bg-[#1e456b] transistion-all cursor-pointer'>
                <img src={assets.search_icon} alt="Search" className="brightness-300"/>
                    Search
            </button>
        </form>

        <img src={assets.main_car} alt="Main Car Image"  className='max-h-74'/>
      
    </div>
  )
}

export default Hero