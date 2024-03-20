import { useQuery } from "react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import ProductCard from "../ui/ProductCard";
import { getAllProducts } from "../utils/helpers";
import Slider from "react-slick";
import Collection from "../ui/Collection";
import Textwithimage from "../ui/Textwithimage";
import {  FaHeart } from 'react-icons/fa';
import Shipping from "../ui/Shipping";
import TopProduct from "../ui/TopProduct";
import PopularProduct from "../ui/PopularProduct";
import HomeShippping from "../ui/Homeshipping";

export default function Home() {
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
    // const { isLoading, data: products } = useQuery({
    //     queryKey: ["products"],
    //     queryFn: getAllProducts,
    // });

    return (
        <>
            <Header />
            <Hero />
            <HomeShippping/>
            <div class='m-auto max-w-[1200px]'>
        <Slider {...settings}>
        <a href="/CollectionPage"><Collection name="Mobile" image="https://www.bell.ca/Styles/images/img-banner_iPhone15_Pro_Alt-hero.png" /></a>
        <a href="/CollectionPage"><Collection name="Computer" image="https://www.computerhope.com/jargon/c/computer-types.png"/></a>
        <a href="/CollectionPage"><Collection name="Tablet" image="https://www.stmgoods.com/wp-content/uploads/STM22-Studio-MultiFit-iPad-Air-5th-gen-Pro-3rd-gen-Blue-Quarter-Front.png"/></a>
        <a href="/CollectionPage"><Collection name="Audio" image="https://rhizmall.pk/wp-content/uploads/2022/12/ezgif.com-gif-maker-50.webp" /></a>
       <a href="/CollectionPage"> <Collection name="Accessories" image="https://5.imimg.com/data5/SELLER/Default/2022/8/OO/SC/AZ/155817538/laptop-and-computer-accessories-500x500.png" /></a>
        
        </Slider>

        <h3 className="mt-20 mb-10 text-center text-3xl font-bold tracking-tight md:text-5xl">Our Products</h3>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <ProductCard name="Apple Iphone 14" id={1} price={370000} Category={"Mobile"} image="https://images.samsung.com/is/image/samsung/p6pim/bd/sm-a057flvhbkd/gallery/bd-galaxy-a05s-sm-a057-sm-a057flvhbkd-thumb-539556309?$344_344_PNG$" > </ProductCard>

                <ProductCard name="Apple Iphone 14" price={370000} Category={"Mobile"} image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673189/Croma%20Assets/Communication/Mobiles/Images/300652_0_ncocr2.png?tr=w-1000" />
                <ProductCard name="Apple Iphone 14" price={370000} Category={"Mobile"} image="https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a245fzsvpkd/gallery/pk-galaxy-a24-sm-a245-sm-a245fzsvpkd-538124784?$650_519_PNG$" />
                <ProductCard name="Apple Iphone 14" price={370000} Category={"Mobile"} image="https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a346elgepkd/gallery/pk-galaxy-a34-5g-sm-a346-sm-a346elgepkd-538124878?$ORIGIN_PNG$?$450_450_PNG$" />
                <ProductCard name="Apple Iphone 14 Apple Iphone 14 " price={370000} Category={"Mobile"} image="https://images.samsung.com/is/image/samsung/p6pim/pk/2202/gallery/pk-galaxy-a53-5g-a536-sm-a536elbgpkd-531569854?$650_519_PNG$" />
                <ProductCard name="Apple Iphone 14" price={370000} Category={"Mobile"} image="https://www.bell.ca/Styles/images/img-banner_iPhone15_Pro_Alt-hero.png" />
                <ProductCard name="Apple Iphone 14" price={370000} Category={"Mobile"} image="https://images.samsung.com/is/image/samsung/p6pim/pk/2202/gallery/pk-galaxy-a53-5g-a536-sm-a536elbgpkd-531569854?$650_519_PNG$" />
                <ProductCard name="Apple Iphone 14" price={370000} Category={"Mobile"} image="https://www.bell.ca/Styles/images/img-banner_iPhone15_Pro_Alt-hero.png" />
                
        
                
                    
                       


                        
                    
                    </div>
                    
                    {/* {isLoading && <p>Loading........</p>}
                    {products?.map((product) => {
                        return (
                            <ProductCard
                                key={product._id}
                                image={`http://localhost:8000/${product.image}`}
                                price={product.price}
                                name={product.name}
                            />
                        );
                    })} */}
             </div>
        <div className="relative my-5">
          <a href="https://example.com/main-banner" className="block w-full ">
              <img src="https://www.easternlogica.com/wp-content/uploads/2023/05/Buy-Computer-Laptop-Accessories.png" alt="Main Banner" className="w-full  h-3/6 " />
          </a>
          
          </div>

      
 
       
               
          <div class='m-auto max-w-[1200px]'>  
             
                <PopularProduct/>
               
      
              <div class="md:flex justify-between ">
    <a href="#" className="w-1/2 p-4  text-white text-center  transition duration-300">
    <img src="https://img.freepik.com/free-vector/realism-hand-drawn-horizontal-banner_23-2150203461.jpg" alt="Product Image" className=" w-full h-full object-cover"/></a>
    <a href="#" className="w-1/2 p-4  text-white text-center duration-300">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6q11vT3PfuLQKHeFIQGyBGrIFyXSOhp_ENRO2FMG-iVCdIk4OFoxvvFnMD7OUX3MNsGc&usqp=CAU" alt="Product Image" className=" h-full w-full object-cover"/>
    </a>
              </div>
                <TopProduct/>
      
                </div>
           
                    
                    



        
      
                      

            <Footer />
           
        </>
    );
}
