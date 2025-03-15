import Image from 'next/image';
import React from 'react';

const Category = () => {
    return (
        <>
            <div className="container justify-center ps-10 py-10">
               <h1 className="text-2xl font-semibold py-10 px-14">Explore Categories</h1>
                <div className=" grid grid-cols-8 items-center gap-10 px-14 transition priority={false} ">
                    <div className="">
                        <Image src="/asset/veg.png" alt="category/1" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2 hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Vegtables</h2>
                    </div>
                    <div className="">
                        <Image src="/asset/fruit1.png" alt="category/2" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2  hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Fruits</h2>
                    </div>
                    <div className="">
                        <Image src="/asset/Dairy1.png" alt="category/3" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2  hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Dairy items</h2>
                    </div>
                    <div className="">
                        <Image src="/asset/cold drink.png" alt="category/4" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2  hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Cold Drinks</h2>
                    </div>
                    <div className="">
                        <Image src="/asset/instant.png" alt="category/5" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2  hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Instant Food</h2>
                    </div>
                    <div className="">
                        <Image src="/asset/biscuit4.png" alt="category/6" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2  hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Biscuits</h2>
                    </div>
                    <div className="">
                        <Image src="/asset/snacks1.png" alt="category/7" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2  hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Snacks</h2>
                    </div>
                    <div className="">
                        <Image src="/asset/oil-masala1.png" alt="category/8" className="cursor-pointer hover:scale-110 border-2 border-transparent hover:border-green-400 hover:border-2  hover:transition-transform" width={150} height={50} />
                        <h2 className="px-4 py-3 text-1xl font-semibold">Masala & Oil</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
