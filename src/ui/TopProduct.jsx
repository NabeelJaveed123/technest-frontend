import Slider from "react-slick";
import {  FaHeart } from 'react-icons/fa';
export default  function TopProduct({id , children, image , name , description , price }){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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

return(
    <div class="m-auto max-w-[1200px] my-6 p-6 gap-3 ">
    <h2 className=" text-3xl pb-1">Sale Products</h2>

    <div class="flex items-center my-4">
      <div class="w-full h-px bg-black"></div>
    </div>
    <Slider {...settings}>
      <div className="border w-full h-full">
    <div className=" relative border">
     <img src="https://plutonstore.com/wp-content/uploads/2022/09/iphone_14_pro_max_gold_pdp_image_position-1a_avail__en-in-removebg-preview.png" alt="Product Image" className="w-full h-64"/>
     <div className="p-4 ">
       <h2 className="font-semibold text-lg mb-2">Apple Iphone 14</h2>
       <p className="text-gray-700 mb-2 line-clamp-2">Mobile</p>
       <div class="flex items-center">
      <p class="text-gray-500 line-through mr-2 font-bold">92000</p>
      <p class=" font-bold text-red-700  text-xl">56000</p>
      </div>
       
     </div>
     <div className='p-4'>
     <span class="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">Sale</span>
     <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
       <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
       </div>
   </div>
   </div>
   <div className="border h-full">
   <div className=" relative h-full ">
     <img src="https://coretekcomputers.com/cdn/shop/products/A1466_6_1024x1024.png?v=1608178265" alt="Product Image" className="w-full h-64"/>
     <div className="p-4 ">
       <h2 className="font-semibold text-lg mb-2">Apple Macbook</h2>
       <p className="text-gray-700 mb-2 line-clamp-2">Laptop</p>
       <div class="flex items-center">
      <p class="text-gray-500 line-through mr-2 font-bold">240000</p>
      <p class=" font-bold text-red-700  text-xl">128000</p>
      </div>
       
     </div>
     <div className='p-4'>
     <span class="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">Sale</span>
     <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
       <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
       </div>
   </div>
   </div>
   <div className="border h-full">
   <div className=" relative h-full border">
     <img src="https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/a/p/apple-ipad-pro-pakistan_1.png" alt="Product Image" className="w-full h-64"/>
     <div className="p-4 ">
       <h2 className="font-semibold text-lg mb-2">Apple Ipad pro</h2>
       <p className="text-gray-700 mb-2 line-clamp-2">Ipad</p>
       <div class="flex items-center">
      <p class="text-gray-500 line-through mr-2 font-bold">150000</p>
      <p class=" font-bold text-red-700  text-xl">90000</p>
      </div>
       
     </div>
     <div className='p-4'>
     <span class="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">Sale</span>
     <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
       <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
       </div>
   </div>
   </div>
   <div className="border h-full">
   <div className=" relative h-full ">
     <img src="https://images.samsung.com/is/image/samsung/p6pim/bd/sm-a057flvhbkd/gallery/bd-galaxy-a05s-sm-a057-sm-a057flvhbkd-thumb-539556309?$344_344_PNG$" alt="Product Image" className="w-full h-64"/>
     <div className="p-4 ">
       <h2 className="font-semibold text-lg mb-2">Infinix pro</h2>
       <p className="text-gray-700 mb-2 line-clamp-2">Mobile</p>
       <div class="flex items-center">
      <p class="text-gray-500 line-through mr-2 font-bold">8000</p>
      <p class=" font-bold text-red-700  text-xl">4000</p>
      </div>
     </div>
     <div className='p-4'>
     <span class="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">Sale</span>
     <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
       <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
       </div>
   </div>
   </div>
   <div className="border w-full h-full">
   <div className=" relative h-full ">
     <img src="https://www.sony.com/image/a623e0ac346dea68e59c279e05221b59?fmt=png-alpha&wid=660&hei=660" alt="Product Image" className="w-full h-64"/>
     <div className="p-4 ">
       <h2 className="font-semibold text-lg mb-2">Sony Headband</h2>
       <p className="text-gray-700 mb-2 line-clamp-2">HeadPhone</p>
       <div class="flex items-center">
      <p class="text-gray-500 line-through mr-2 font-bold">15000</p>
      <p class=" font-bold text-red-700  text-xl">8000</p>
      </div>
       
     </div>
     <div className='p-4'>
     <span class="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">Sale</span>
     <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
       <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
       </div>
   </div>
   </div>
    <div className="border h-full">
   <div className=" relative h-full ">
     <img src="https://audionic.co/cdn/shop/files/audionic-default-title-max-350-bt-plus-2-1-speaker-34984417001628.png?v=1693982707" alt="Product Image" className="w-full h-64"/>
     <div className="p-4 ">
       <h2 className="font-semibold text-lg mb-2 line-clamp-1">MAX 350 BT PLUS 2.1 SPEAKER – Audionic</h2>
       <p className="text-gray-700 mb-2 ">Accessories</p>
       <div class="flex items-center">
      <p class="text-gray-500 line-through mr-2 font-bold">32000</p>
      <p class=" font-bold text-red-700  text-xl">28000</p>
      </div>
      
       
     </div>
     <div className='p-4'>
     <span class="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">Sale</span>
     <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
       <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
       </div>
   </div>
   </div>
     </Slider>
    </div>





    )}