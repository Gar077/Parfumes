import React from 'react'
import styles from "./BefAf.module.css"
import nkar1 from "./nkar1.png"
import nkar2 from "./nkar2.png"
import nkar3 from "./nkar3.png"
import love from "./loveimg.png"
import ReactCompareImage from "react-compare-image"

const BefAf = () => {
    return (
        <div className={styles.divBig}>
            <div className={styles.divbig}>
                <div className={styles.div1}>
                    <h3>VIRTUAL TRY-ON</h3>
                    <p>NEVER BUY THE WRONG <br /> SHADE AGAIN</p>
                    <div className={styles.div1small}>
                        <h3>Try Now!</h3>
                        <img className={styles.img1} src={nkar1} />
                    </div>
                </div>
                <div className={styles.div2}>
                    <div className={styles.div2small}>
                        <ReactCompareImage  aspectRatio="wider" hover={true} handleSize={20} leftImage={nkar2} rightImage={nkar3} />
                    </div>
                </div>
            </div>
            <div className={styles.divhed}>
                <img src={love}  />
                <h1>Our Featured Products</h1>
            </div>
        </div>
    )
}

export default BefAf