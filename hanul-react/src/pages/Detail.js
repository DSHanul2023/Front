import React from 'react'
import styles from "./Detail.module.css";

/**
 * 상세 페이지 구현을 위한 클래스
 * 
 */

class Detail extends React.Component{
    render () {
        return(
            <div className={styles.default}>
                <div className={styles.box}>
                    <div className={styles.img}>
                        
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            [소설] 책 제목
                        </div>
                        <div className={styles.more}>
                            저자, 출판사
                        </div>
                        <div className={styles.descr}>
                            책 설명
                        </div>
                    </div>
                </div>
                <div className={styles.btn}>
                    도서 더보기
                </div>
            </div>
        );
    }
}

export default Detail;