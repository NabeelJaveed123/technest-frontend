import {  FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default  function Product({ image , name , Category, price , id , children  }) {
     return(
        
<Link to={`/product/${id}`}>
       

       <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
         <img src={image} alt="Product Image" className="w-full h-64"/>
         <div className="p-4 ">
           <h2 className="font-semibold text-lg mb-2 text-teal-500">{name}</h2>
           <p className="text-gray-700 mb-2 line-clamp-2">{Category}</p>
           <p className="text-gray-900 font-bold">{price}</p>
           
         </div>
         <div className='p-4'>
         <FaHeart fill='red' size={"20px"} className='absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
           <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">Add to Cart</button>
           </div>
       </div>
     
       
     
     
     
     
     
     {/* 
         <div className='  h-full transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative'>  
             <div className=' h-3/6   flex-1 flex items-center justify-center m-3 '>
             <img src={image} alt='product-img' className='w-50 h-50' />
             </div>
             <div className=' h-3/6  mx-8 '>
                 <h3 className='text-xl font-bold'>{name}</h3>
                 <p className='text-sm'>{description}</p>
                 <div className='flex justify-between items-center mt-6'>
                     <div className='text-lg font-semibold '>${price}</div>
                     <FaHeart fill='red' size={"20px"} className='absolute right-0 m-4 text-2xl transition duration-200 cursor-pointer text-darkgreen' />
                 </div>
                 <div className='displayStack__2 mt-2'>
                     <button type="button" class="text-white w-full bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add To Cart</button>
                 </div>
                 
             </div>
         
         </div>   */}
     
             </Link>





             
      
        
     )
 }