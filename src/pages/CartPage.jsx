import React, { useState } from 'react'
import Header from '../ui/Header';
import Footer from '../ui/Footer';
export default function CartPage()  {
    const [amount, setAmount] = useState(1);
    return(
        <>
        <Header />

<div className="container m-auto max-w-[1200px]">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
        </div>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24" src="https://images.samsung.com/is/image/samsung/p6pim/bd/sm-a057flvhbkd/gallery/bd-galaxy-a05s-sm-a057-sm-a057flvhbkd-thumb-539556309?$344_344_PNG$" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Iphone 6S</span>
              <span class="text-red-500 text-xs">Apple</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
          <div className='flex flex-row items-center'>
                        <button className=' pb-2  rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className=' pb-2  rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        </div>

        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24" src="https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone14ProMax-s.jpg" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Xiaomi Mi 20000mAh</span>
              <span class="text-red-500 text-xs">Xiaomi</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
          <div className='flex flex-row items-center'>
                        <button className=' pb-2  rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className=' pb-2  rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
          <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
        </div>

        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src="https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone14ProMax-s.jpg" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Airpods</span>
              <span class="text-red-500 text-xs">Apple</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
          <div className='flex flex-row items-center'>
                        <button className=' pb-2  rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className=' pb-2  rounded-lg text-teal-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
          <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
        </div>

        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items 3</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
       
        
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
</div>
        <Footer />
        </>
    )
}
