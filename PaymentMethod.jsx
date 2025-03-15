import { ReceiptRefundIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Rocket, { Headphones, RocketIcon } from "lucide-react";
import React from "react";

const PaymentMethod = () => {
    return (
     <>
        <div className="container px-10 py-14">
            <div className="grid grid-cols-4 gap-10">
                <div className="grid grid-cols-3 bg-green-100 py-8 rounded-xl">
                    <div className="flex justify-center">
                        <RocketIcon size={50} 
                        className="bg-green-500 text-white p-2 rounded-lg" />
                </div>
                <div className="col-span-2 ">
                    <h2 className="font-semibold">Free Shipping</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>     
                <div className="grid grid-cols-3 bg-green-100 py-8 rounded-xl">
                    <div className="flex justify-center">
                        <ReceiptRefundIcon
                         width={50} 
                        className="bg-green-500 text-white p-2 rounded-lg" />
                </div>
                <div className="col-span-2 ">
                    <h2 className="font-semibold">Easy to Return</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
                <div className="grid grid-cols-3 bg-green-100 py-8 rounded-xl">
                    <div className="flex justify-center">
                        <ShieldCheckIcon
                         width={50} 
                        className="bg-green-500 text-white p-2 rounded-lg" />
                </div>
                <div className="col-span-2 ">
                    <h2 className="font-semibold">Secure Payment</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
                <div className="grid grid-cols-3 bg-green-100 py-8 rounded-xl">
                    <div className="flex justify-center">
                        <Headphones 
                        size={50} 
                        className="bg-green-500 text-white p-2 rounded-lg" />
                </div>
                <div className="col-span-2 ">
                    <h2 className="font-semibold">24-Hour Support</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            </div>
          </div>
          </>
    );
};

export default PaymentMethod;