import React from "react";
import styles from "./FullContent.module.css";

class FullContent extends React.Component {
  render() {
    return (
      <div className={styles.fullcFrame}>
        <div className={styles.title}>
          <div className={styles.dogImg}></div>
          <h1>Contents</h1>
        </div>
        <div className={styles.todayContent}>
          <div className={styles.ctitle}>
            <span><strong>오늘의 책</strong></span>
            <span>오늘의 영화</span>
          </div>
          <div className={styles.cbox}>
            <div className={styles.clist}>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
              <div className={styles.citem}></div>
            </div>
            <div className={styles.paging}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullContent;
