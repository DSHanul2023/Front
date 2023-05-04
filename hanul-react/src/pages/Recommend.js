import React from "react";
import styles from "./Recommend.module.css";

class Recommend extends React.Component {
  render() {
    return (
      <div className={styles.recframe}>
        <div className={styles.title}>
          <div className={styles.dogImg}></div>
          <h1>추천받은 콘텐츠</h1>
        </div>
        <div className={styles.recContents}>
          <h2>추천받은 책</h2>
          <div className={styles.recitem}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <div className={styles.cdetail}>
              <div className={styles.cImg}></div>
              <ul>
                <h3>[소설] 책 제목1</h3>
                <li>저자</li>
                <li>출판사</li>
                <li>책 설명</li>
              </ul>
            </div>
            <div className={styles.clist}>
              <li>
                <div className={styles.cImg}></div>
                <p>책 제목2</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>책 제목3</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>책 제목4</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>책 제목5</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>책 제목6</p>
              </li>
            </div>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        <div className={styles.recContents}>
          <h2>추천받은 영화</h2>
          <div className={styles.recitem}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <div className={styles.cdetail}>
              <div className={styles.cImg}></div>
              <ul>
                <h3>영화 제목1</h3>
                <li>감독</li>
                <li>출연 배우</li>
                <li>책 설명</li>
              </ul>
            </div>
            <div className={styles.clist}>
              <li>
                <div className={styles.cImg}></div>
                <p>영화 제목2</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>영화 제목3</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>영화 제목4</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>영화 제목5</p>
              </li>
              <li>
                <div className={styles.cImg}></div>
                <p>영화 제목6</p>
              </li>
            </div>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
