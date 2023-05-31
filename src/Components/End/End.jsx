import React from 'react'
import styles from "./End.module.css"
import { AiFillAmazonCircle } from "react-icons/ai"
import { HiLocationMarker } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineInbox } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { BsLink45Deg } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'

const End = () => {
    return (
        <div className={styles.divBig}>
            <div className={styles.divgits}></div>
            <div className={styles.end}>
                <div className={styles.div1}>
                    <AiFillAmazonCircle className={styles.icon1} />
                    <h2>amazon</h2>
                </div>
                <div className={styles.div2}>
                    <h3>Contact Us</h3>
                    <label className={styles.label1}>
                        <HiLocationMarker className={styles.icon2} />
                        <p>111 north avenue Orlando, FL 32801</p>
                    </label>
                    <label className={styles.label2}>
                        <BsTelephone className={styles.icon3} />
                        <p>352-306-4415</p>
                    </label>
                    <label className={styles.label3}>
                        <AiOutlineInbox className={styles.icon4} />
                        <p>support@amazon.com</p>
                    </label>
                </div>
                <div className={styles.div3}>
                    <h3>Account</h3>
                    <label>
                        <BiLogOut className={styles.icon5} />
                        <p>Sign in</p>
                    </label>
                </div>
                <div className={styles.div4}>
                    <h3>Company</h3>
                    <label>
                        <MdOutlinePeopleAlt className={styles.icon6} />
                        <p>About us</p>
                    </label>
                </div>
                <div className={styles.div5}>
                    <h3>Recources</h3>
                    <label>
                        <BsLink45Deg className={styles.icon7} />
                        <p>Safety Privace & Terms</p>
                    </label>
                </div>
            </div>
            <div className={styles.enddiv}>
                <p>Copyright <BiCopyright className={styles.icon8} />2022 by Amazon, Inc. <br />All rights reserved.</p>
            </div>
        </div>
    )
}

export default End