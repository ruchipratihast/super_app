import React from 'react'
import styles from "./Banner.module.css";


const Banner = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <p className={styles.heading}>Discover new things on Superapp</p>
        </div>
      </div>
    </>
  )
}

export default Banner;