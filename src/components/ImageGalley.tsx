"use client"

import { urlFor } from "@/sanity/lib/image"
import Image from "next/image";

import { useState } from "react"

// Define the type for images as an array of strings (URLs)
interface iAppProps {
    images: string[] // Assuming images are strings (URLs)
}

export default function ImageGalley({ images }: iAppProps) {
    const [bigImage, setBigImage] = useState<string>(images[0]); // specify type for state

    const handleSmallImageClick = (image: string) => { // specify type for image
        setBigImage(image);
    }

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image, idx) => { // `image` is a string (URL), `idx` is a number
                    return (
                        <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={urlFor(image).url()}
                                alt="photo"
                                width={200}
                                height={200}
                                className="h-full w-full object-cover object-center cursor-pointer"
                                onClick={() => handleSmallImageClick(image)}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}
                    alt="Photo"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
            </div>
        </div>
    )
}


// "use client"

// import { urlFor } from "@/sanity/lib/image"
// import Image from "next/image";

// import { useState } from "react"

// interface iAppProps {
//     images: any
// }

// export default function ImageGalley({images}: iAppProps) {
//     const [bigImage, setBigImage] = useState(images[0]);

//     const handleSmallImageClick = (image: any) => {
//          setBigImage(image);
//     }
//   return (
//     <div className="grid gap-4 lg:grid-cols-5">
//        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
//           {images.map((image: string, idx : any) => {
//             return(
//            <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
//               <Image 
//               src={urlFor(image).url()}
//               alt="photo"
//               width={200}
//               height={200}
//               className="h-full w-full object-cover object-center cursor-pointer"
//               onClick={() => handleSmallImageClick(image)}/>
//            </div>
//             )
//           })}
//        </div>
//        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
//          <Image 
//          src={urlFor(bigImage).url()}
//          alt="Photo"
//          width={500}
//          height={500}
//          className="h-full w-full object-cover object-center"/>

//          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
//        </div>
//     </div>
//   )
// }