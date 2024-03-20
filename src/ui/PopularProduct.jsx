import Slider from "react-slick";
import {  FaHeart } from 'react-icons/fa';
export default  function PopularProduct({id , children, image , name , description , price }){
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
        <h2 className=" text-3xl pb-1 ">MOST POPULAR</h2>
        <a href="/CollectionPage" class="mt-4 text-blue-500 focus:outline-none flex items-center ">
    More
    <div className="pl-2 pt-1">
    <svg fill="#2fc147" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#2fc147"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg>
    </div>
</a>

        <div class="flex items-center my-4">
          <div class="w-1/2 h-1 bg-green-500"></div>
          <div class="w-1/2 h-px bg-black"></div>
        </div>
        <Slider {...settings}>
          <div className="border w-full h-full">
        <div className=" relative border">
         <img src="https://plutonstore.com/wp-content/uploads/2022/09/iphone_14_pro_max_gold_pdp_image_position-1a_avail__en-in-removebg-preview.png" alt="Product Image" className="w-full h-64"/>
         <div className="p-4 ">
           <h2 className="font-semibold text-lg mb-2">Apple Iphone 14</h2>
           <p className="text-gray-700 mb-2 line-clamp-2">Mobile</p>
           <p className="text-gray-900 font-bold">price</p>
           
         </div>
         <div className='p-4'>
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
           <p className="text-gray-900 font-bold">price</p>
           
         </div>
         <div className='p-4'>
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
           <p className="text-gray-900 font-bold">210000</p>
           
         </div>
         <div className='p-4'>
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
           <p className="text-gray-900 font-bold">85000</p>
           
         </div>
         <div className='p-4'>
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
           <p className="text-gray-900 font-bold">15000</p>
           
         </div>
         <div className='p-4'>
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
           <p className="text-gray-900 font-bold">28000</p>
           
         </div>
         <div className='p-4'>
         <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
           <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
           </div>
       </div>
       </div>
       </Slider>
        </div>










    )}