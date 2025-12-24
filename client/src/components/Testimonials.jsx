import React from 'react'
import Title from './Title'
import assets from '../assets/assets';

const Testimonials = () => {

    const testimonials = [
        {name: "Emma Rodriguez", 
        location: "Barcelona, Spain", 
        image: assets.testimonial_image_1 ,
        testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!" },
        {name: "Liam Johnson",
        location: "New York, USA", 
        image: assets.testimonial_image_2, 
        testimonial: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!" },
        {name: "Sophia Lee", 
        location: "Seoul, South Korea", 
        image: assets.testimonial_image_1,
        testimonial: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results." }
    ];


  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30">

        <Title title="What Our Customers Say" subTitle="Discover why descerning travelers choose StayVenture for their luxury accommodations around the world."/>


            <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
                {testimonials.map((testimonial,index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow hover:translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img src={assets.star_icon} alt="Star" className="w-4 h-4" key={index}/>
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div> 
  )
}

export default Testimonials
