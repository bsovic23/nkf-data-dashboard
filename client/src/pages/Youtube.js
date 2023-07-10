import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

const Youtube = () => {
    return(
        <section class='youtube'>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    TRENDS: Look at trends of a specific FY, topic, or delivery method
                    </div>
                    <div class="col">
                    TOTALS: Look at performace, or totals for youtube videos
                    </div>
                    <div class="col">
                    COMNPARE: Take different groups and compare
                    </div>
                </div>
            </div>
            <div>
                <p>Click through or use your keyboard the slides below to look at examples
                    to help guide you to which tab you may be itnerested
                    in looking at
                </p>
            </div>   
            <div class="col">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'3'}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Keyboard, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
};

export default Youtube;