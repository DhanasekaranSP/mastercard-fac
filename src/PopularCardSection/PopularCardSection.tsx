import { CardTemplate } from "./CardTemplate"
import { popularCards } from "./constants"

import './PopularCardSection.css'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const PopularCardSection = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: "16px" }}>

            <h5>
                Our most Popular Credit and Debit Cards and their Benefits
            </h5>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                {popularCards.map((card) => {
                    return (
                        <SwiperSlide style={{ width: "30%" }}>
                            <CardTemplate id={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div>

            </div>

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: "16px" }}>
                <div className="view-all-cards primarycolor-bg">
                    View all cards
                </div>
            </div>
        </div>
    )
}
