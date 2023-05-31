import React from 'react'
import styles from "./Comments.module.css"
import girl from "./girl.png"
import lady from "./lady.jpg"
import macan from "./macan.jpg"
import thom from "./thom.jpg"
import vin from "./vin.jpg"
import tom from "./tom.jpeg"
import xcho from "./xcho.jpeg"
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const Comments = () => {
    return (
        <div className={styles.divBig}>
            <div className={styles.divbig}>
                <div className={styles.div1}>
                    <h2>TOP RATED</h2>
                    <p>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN <br /> CHILDREN REJOICED</p>
                </div>
                <div className={styles.div2}>
                    <img src={girl} />
                </div>
                <div className={styles.div3}>
                    <h2>100k</h2>
                    <p>HAPPE CUSTOMERS WITH US</p>
                </div>
            </div>
            <div className={styles.divbig1}>
                <h1>REVIEWS</h1>
                <div className={styles.big1}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop
                    >
                        <SwiperSlide>
                                <img className={styles.imgsw} src={lady} />
                            <div className={styles.bigswiper}>
                                <div className={styles.swiper1}>
                                    <p>You are bigger than all react youtubers
                                        still making videos like this bro!
                                        If you want teach us about backend too.</p>
                                    <div></div>
                                    <h3>Lady Gaga</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className={styles.imgsw} src={macan} />
                            <div className={styles.bigswiper}>
                                <div className={styles.swiper1}>
                                    <p>I learned so much from this video, thank you for making it!</p>
                                    <div></div>
                                    <h3>Macan</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className={styles.imgsw} src={vin} />
                            <div className={styles.bigswiper}>
                                <div className={styles.swiper1}>
                                    <p>Awesome man. thank you. would you mind to make a backend for it.?</p>
                                    <div></div>
                                    <h3>Vin Diesel</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className={styles.imgsw} src={thom} />
                            <div className={styles.bigswiper}>
                                <div className={styles.swiper1}>
                                    <p>Wow awesome my favorite teacher thanks keep posting more often</p>
                                    <div></div>
                                    <h3>Thomas Shelby</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className={styles.imgsw} src={tom} />
                            <div className={styles.bigswiper}>
                                <div className={styles.swiper1}>
                                    <p>You gave so many things to learn. I am grateful to you.</p>
                                    <div></div>
                                    <h3>Tom Hardy</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className={styles.imgsw} src={xcho} />
                            <div className={styles.bigswiper}>
                                <div className={styles.swiper1}>
                                    <p>thanks so much for this video. Are you going to give
                                        us a backend  tutorial for this project?</p>
                                    <div></div>
                                    <h3>Xcho</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Comments;