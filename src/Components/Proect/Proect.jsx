import React from "react";
import styles from "./Proect.module.css";
import { AiFillAmazonCircle } from "react-icons/ai"
import { CgShoppingBag } from "react-icons/cg"

const Proect = () => {

    return (<>
        <div className={styles.divbig}>
            <div className={styles.divlogo}>
                <AiFillAmazonCircle className={styles.icon1} />
                <p>amazon</p>
            </div>

            <div className={styles.divlog}>
                <ul className={styles.ul1}>
                    <li>Colactions</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
                <input type="text" placeholder="Search" />
                <CgShoppingBag className={styles.icon2} />

            </div>

        </div>

    </>

    )

}

export default Proect;