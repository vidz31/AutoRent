import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer class="px-2 md:px-16 lg:px-24 xl:px-32 mt-10 text-sm text-gray-500">
        <div class="flex flex-col md:flex-row items-start justify-between gap-2 pb-6 border-borderColor">
            <div>
                <img class="w-34 md:w-32" src={assets.logo} alt="dummyLogoColored" />
                <p class="max-w-80 mt-3">Premium car rental service with a wide selection of vehicles to suit your needs.</p>

                <div className='flex items-center gap-3 mt-4'>
                      <img src={assets.facebook_logo} alt="" />  
                      <img src={assets.instagram_logo} alt="" />  
                      <img src={assets.twitter_logo} alt="" />  
                      <img src={assets.gmail_logo} alt="" />  
                </div>
            </div>
            <div class="flex mt-6 gap-6">
                <div>
                    <h3 class="font-semibold text-base text-gray-900 md:mb-5 mb-2">Quick Links</h3>
                    <ul class="text-sm space-y-1">
                        <li><a href="#" class="hover:underline transition">Home</a></li>
                        <li><a href="#" class="hover:underline transition">Browse Cars</a></li>
                        <li><a href="#" class="hover:underline transition">List Your Cars</a></li>
                        <li><a href="#" class="hover:underline transition">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-base text-gray-900 md:mb-5 mb-2">Resources</h3>
                    <ul class="text-sm space-y-1">
                        <li><a href="#" class="hover:underline transition">Help Center</a></li>
                        <li><a href="#" class="hover:underline transition">Terms of Service</a></li>
                        <li><a href="#" class="hover:underline transition">Privacy Policy</a></li>
                        <li><a href="#" class="hover:underline transition">Insurance</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-semibold text-base text-gray-900 md:mb-5 mb-2">Contact</h3>
                    <ul class="text-sm space-y-1">
                        <li><a href="#" class="hover:underline transition">124 luxury car</a></li>
                        <li><a href="#" class="hover:underline transition">Gujarat, India</a></li>
                        <li><a href="#" class="hover:underline transition">+91 9876543210</a></li>
                        <li><a href="#" class="hover:underline transition">info@example.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="py-4 text-center text-sm md:text-base text-gray-500/80">
            Copyright 2025 © UrbanRent All Right Reserved.
        </p>
    </footer>
  )
}

export default Footer
