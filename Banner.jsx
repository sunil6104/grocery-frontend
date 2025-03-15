import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="container flex justify-center px-1">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="Banner1 p-5 priority={false} rounded-xl">
                <div className="grid grid-cols-2 items-center">
                  <div className="row-span-1">
                    <Badge variant="outline" className="text-md bg-white text-green-600 border-green-600">
                      Sale up to 20% OFF{" "}
                    </Badge>
                    <h1 className="text-3xl font-bold text-gray-900 py-6">
                      Get Fresh Organic Food Everyday
                    </h1>
                    <p className="text-gray-700 text-2xl ">
                      Making Grocery food Errands Worth Your
                    </p>
                    <Button className="bg-blue-600 mt-6 hover:bg-blue-700 transition text-2xl">Buy Product</Button>
                  </div>
                  <div className="row-span-1">
                    <Image src="/asset/banner1.png" alt="banner/png" width={600} height={300} />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid grid-cols-2 items-center bg-green-400 p-5 rounded-lg ">
                <div className="row-span-1">
                  <Badge variant="outline" className="text-md bg-white text-green-600 border-green-600">
                    Sale up to 20% OFF{" "}
                  </Badge>
                  <h1 className="text-3xl font-bold text-gray-900 py-6">
                    Get Fresh Organic Food Everyday
                  </h1>
                  <p className="text-gray-700 text-2xl ">
                    Making Grocery food Errands Worth Your
                  </p>
                  <Button className="bg-blue-600 mt-6 hover:bg-blue-700 transition text-2xl">Buy Product</Button>
                </div>
                <div className="row-span-1">
                  <Image src="/asset/banner2.png" alt="banner/png" width={600} height={300} />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid grid-cols-2 items-center bg-green-400 p-5 rounded-lg ">
                <div className="row-span-1">
                  <Badge variant="outline" className="text-md bg-white text-green-600 border-green-600">
                    Sale up to 20% OFF{" "}
                  </Badge>
                  <h1 className="text-3xl font-bold text-gray-900 py-6">
                    Get Fresh Organic Food Everyday
                  </h1>
                  <p className="text-gray-700 text-2xl">
                    Making Grocery food Errands Worth Your
                  </p>
                  <Button className="bg-blue-600 mt-6 hover:bg-blue-700 transition text-2xl">Buy Product</Button>
                </div>
                <div className="row-span-1">
                  <Image src="/asset/banner3.png" alt="banner/png" width={600} height={300} />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
  </Carousel>
    </div>

    </>
  )
}

export default Banner
