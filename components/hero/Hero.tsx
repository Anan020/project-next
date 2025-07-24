'use client'
import { landmarkCardProps } from "@/utils/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import OtherInfos from "./OtherInfos";




const Hero = ({ landmarks }: { landmarks: landmarkCardProps[] }) => {
    return (
        <Swiper
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
        >
            {
                landmarks.map((landmark) => {
                    return (

                        <SwiperSlide key={landmark.image} className="group">
                            <div
                                className="relative rounded-md overflow-hidden"
                            >
                                <img
                                    className="w-full h-[600px] object-cover
                                    brightness-75 group-hover:brightness-50 transition-all duration-200
                                    "
                                    src={landmark.image}
                                />
                                <div className="absolute bottom-0 left-0 z-50">
                                    <div className="col-span-4 mb-4 flex h-full flex-1
                                    justify-end px-5 md:mb-4 md:justify-end md:px-10
                                    ">
                                        <OtherInfos landmark={landmark}/>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                    )
                })
            }

        </Swiper>
    )
}
export default Hero