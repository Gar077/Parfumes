import React from "react";
import styles from "./Duxi.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import duxi1 from "./duxi1.png";
import duxi2 from "./duxi2.png";
import duxi3 from "./duxi3.png";
import duxi4 from "./duxi4.png";
import duxi5 from "./duxi5.png";
import duxi6 from "./duxi6.png";
import { Navigation, Pagination } from "swiper";

const Duxi = () => {
    return (

        <div className={styles.divbig}>
            <Swiper className={styles.swiper}
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation               
                pagination={{ clickable: true }}
                loop 
            >
                <SwiperSlide className={styles.swipers}>
                    <div className={styles.div1}>
                        <div className={styles.smalldiv}>
                            <h1>SKIN</h1>
                            <p>Super Skin Care</p>
                            <h1>25$</h1>
                            <button>Shop now</button>
                        </div>
                        <img className={styles.div1small1} src={duxi1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.div2}>
                        <div className={styles.smalldiv}>
                            <h1>SKIN</h1>
                            <p>Super Skin Care</p>
                            <h1>25$</h1>
                            <button>Shop now</button>
                        </div>
                        <img className={styles.div1small2} src={duxi2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.div3}>
                        <div className={styles.smalldiv}>
                            <h1>SKIN</h1>
                            <p>Super Skin Care</p>
                            <h1>25$</h1>
                            <button>Shop now</button>
                        </div>
                        <img className={styles.div1small3} src={duxi3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.div4}>
                        <div className={styles.smalldiv}>
                            <h1>SKIN</h1>
                            <p>Super Skin Care</p>
                            <h1>25$</h1>
                            <button>Shop now</button>
                        </div>
                        <img className={styles.div1small4} src={duxi4} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.div5}>
                        <div className={styles.smalldiv}>
                            <h1>SKIN</h1>
                            <p>Super Skin Care</p>
                            <h1>25$</h1>
                            <button>Shop now</button>
                        </div>
                        <img className={styles.div1small5} src={duxi5} />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.div6}>
                        <div className={styles.smalldiv}>
                            <h1>SKIN</h1>
                            <p>Super Skin Care</p>
                            <h1>25$</h1>
                            <button>Shop now</button>
                        </div>
                        <img className={styles.div1small6} src={duxi6} />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >

    );
};

export default Duxi;
