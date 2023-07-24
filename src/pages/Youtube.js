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
                        <div>
                            <h2>REASON 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2>REASON 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2>REASON 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2>REASON 4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
};

export default Youtube;