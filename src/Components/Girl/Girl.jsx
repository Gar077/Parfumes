import React from "react"
import styles from "./Girl.module.css"
import woman from "./woman.png"
import { RiShoppingBagLine } from "react-icons/ri"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const Girl = () => {
    return (<>
        <div className={styles.divbig}>
            <div className={styles.div1}>
                <h4>SKIN PROTECTION CREAM</h4>
                <div className={styles.div1small}>
                <h1>Trendy Collection</h1>
                <p>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</p>
                </div>
            </div>
            <div className={styles.div2}>
                <div className={styles.div2small}></div>
                 <img className="imggirl" src={woman} />
                 <div className={styles.div2icon}>
                  <div className={styles.bagicon}>
                  <RiShoppingBagLine className={styles.div2bag} />
                  </div>
                    <div className={styles.div2icontxt}>
                        <span>Best Signup Offers</span>
                        <div className={styles.div2txticon}>
                            <HiOutlineArrowNarrowRight className={styles.div2right} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.div3}>
                <div className={styles.div3small}>
                    <h1>1.5 m</h1>
                    <p>Monthly traffic</p>
                </div>
                <div className={styles.div3small1}>
                    <h1>100k</h1>
                    <p>Happy Customers</p>
                </div>
            </div>

        </div>

    </>)
}

export default Girl;