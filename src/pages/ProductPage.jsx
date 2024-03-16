import React, { useState } from 'react'
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { useParams } from 'react-router-dom';
import {  FaHeart } from 'react-icons/fa';
import Faqs from "../ui/Faqs";

import Slider from "react-slick";

const ProductPage = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        pauseOnFocus: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const { id } = useParams()
    console.log(id)


    const [images, setImages] = useState({
        img1 : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673189/Croma%20Assets/Communication/Mobiles/Images/300652_0_ncocr2.png?tr=w-1000",
        img2 : "",
        img3 : "",
        img4 : "https://manilashaker.com/wp-content/uploads/2023/07/ready-to-store-more-with-vivo-y36.jpg"
    })

    

    const [amount, setAmount] = useState(1);

    const [activeTab, setActiveTab] = useState('dashboard');

      const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };

    return (
        <>
        <Header />

    <div className="container mx-auto px-4 py-8  max-w-[1200px]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
      <div className="md:order-1">
        <img src={images.img1} alt="Product Image" class="w-full rounded-lg shadow-md"/>
      </div>
      
      <div class="md:order-2 mt-10 ">
      
        <h2 className="text-2xl font-bold mb-4">Product Name</h2>
        <span className=' text-teal-600 font-semibold '>Apple</span>
        <p className="text-gray-700 mb-4 mt-2 line-clamp-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='flex flex-col md:flex-row md:items-center gap-12 mb-4'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 pb-2 px-5 rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 pb-2 px-4 rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    </div>
        <p class="text-2xl font-bold mb-4">$99.99</p>
        <div className='flex gap-2'>
        <div className='flex-1'>
        <button class="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded w-2/4">Add to Cart</button>
        </div>
        <div>
        <FaHeart fill='red' size={"30px"} className='absolute right-0 m-2 text-2xl transition duration-200 cursor-pointer text-darkgreen w-2/4' />
        </div>
        </div>
        <div className='mt-5'>
          <p className=' font-bold'>Category: <span className=' font-normal'>Mobile</span></p>
        </div>
      </div>
    </div>
  </div>

  <div className="max-w-[1200px] mx-auto mb-20" >
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px p-4" role="tablist">
          <li className="mr-2" role="presentation">
            
            <button
              className= {`p-2 bg-black text-white tab-button ${activeTab === 'Description' ? 'active' : ''}`}
              onClick={() => handleTabClick('Description')}
              role="tab"
              aria-controls="Description"
              aria-selected={activeTab === 'Description'}
            >
              Description
            </button>
          
          </li>
         
          
        </ul>
      </div>
      <div id="myTabContent">
        <div className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${activeTab !== 'Description' ? 'hidden' : ''}`} id="Description" role="tabpanel" aria-labelledby="profile-tab">
          <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.</p>
        </div>
        
        
      </div>
      
    </div>




  <div className=' max-w-[1200px] m-auto '>
    <div className='mb-5'>
      <h2 className='font-bold text-4xl'>Related Products</h2>
    </div>
  <div className="slider-container">
  <Slider {...settings}>
  
  
  <div className=" me-12 bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
    <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" alt="Product Image" className="w-full h-full "/>
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">"apple"</h2>
      <p className="text-gray-700 mb-2 line-clamp-2">"description"</p>
      <p className="text-gray-900 font-bold">"price"</p>
      <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
      <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
    </div>
  </div>
  <div className="me-12 bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
    <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" alt="Product Image" className="w-full h-full "/>
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">"apple"</h2>
      <p className="text-gray-700 mb-2 line-clamp-2">"description"</p>
      <p className="text-gray-900 font-bold">"price"</p>
      <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
      <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
    </div>
  </div>
  <div className=" me-12 bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
    <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" alt="Product Image" className="w-full h-full "/>
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">"apple"</h2>
      <p className="text-gray-700 mb-2 line-clamp-2">"description"</p>
      <p className="text-gray-900 font-bold">"price"</p>
      <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
      <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
    </div>
  </div>
  <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
    <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" alt="Product Image" className="w-full h-full "/>
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">"apple"</h2>
      <p className="text-gray-700 mb-2 line-clamp-2">"description"</p>
      <p className="text-gray-900 font-bold">"price"</p>
      <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
      <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
    </div>
  </div>


  <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
    <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" alt="Product Image" className="w-full h-full "/>
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">"apple"</h2>
      <p className="text-gray-700 mb-2 line-clamp-2">"description"</p>
      <p className="text-gray-900 font-bold">"price"</p>
      <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
      <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
    </div>
  </div>


  <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
    <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" alt="Product Image" className="w-full h-full "/>
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">"apple"</h2>
      <p className="text-gray-700 mb-2 line-clamp-2">"description"</p>
      <p className="text-gray-900 font-bold">"price"</p>
      <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
      <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
    </div>
  </div>


  </Slider>
  </div>
  </div>
  
  
  
  <div className="container mx-auto px-4 py-8  max-w-[1200px]">
        <Faqs />
     </div>






        
        
        <Footer />
        </>
    )
}

export default ProductPage