import { CardTemplate } from "./CardTemplate"

import './PopularCardSection.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { useEffect, useState } from 'react';
// import { getAllPopularCards } from '../common/repo';
import { CardTemplateI } from './model';
import { getAllPopularCards } from "../../common/repo";

import { Link } from 'react-router-dom';


export const PopularCardSection = () => {
    useEffect(() => { fetchData() }, []);
    const [popularCardsData, setPopularCardsData] = useState<CardTemplateI[]>();

    const fetchData = async () => {
        const response = await getAllPopularCards();
        setPopularCardsData(response)
        // setPopularCardsData(response);
    }

    return (
        <div className="popular-cards-section left-right-padding" style={{ display: 'flex', flexDirection: 'column', gap: "4px" }}>

            <h5 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                Our most Popular Credit and Debit Cards and their Benefits
            </h5>

            <Swiper

                effect={'coverflow'}
                spaceBetween={30}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                // loopAdditionalSlides={-1}
                // initialSlide={1}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >

                {popularCardsData?.map((card) => {
                    return (
                        <SwiperSlide key={card.id} style={{ width: "30%" }}>
                            <CardTemplate id={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="swiper-pagination"></div>


            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: "16px" }}>
                <Link to="/offering-page" style={{ textDecoration: 'none' }}>
                    <div className="view-all-cards primarycolor-bg">
                        View all cards
                    </div>
                </Link>
            </div>
        </div>
    )
}
