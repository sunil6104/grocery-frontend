import Image from "next/image";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Category from "./_components/category/Category";
import Product from "./product/page";
import PaymentMethod from "./_components/PaymentMethod";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <PaymentMethod />
    <Category />
    <div className="container px-14 transition-transform">
    <h1 className="text-4xl font-semibold py-9 px-14">Popular Product </h1>
    <Product />
    <Newsletter />
    <Footer />
 

    </div>
 

    </>
    
  );
  
}
