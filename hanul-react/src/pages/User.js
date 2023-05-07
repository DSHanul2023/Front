import React from 'react'
import styles from "./User.module.css";

/**
 * 사용자 페이지 구현을 위한 클래스
 * 
 */

class User extends React.Component{
    render () {
        return(
            <div className={styles.default}>
                <div className={styles.profile}>
                    <div className={styles.profileImg}>
                        
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>위러버</div>
                        <div className={styles.email}>welover@duksung.ac.kr</div>
                    </div>
                </div>
                <div className={styles.midbox}>
                    <div className={styles.inline}>
                        작성 게시물
                    </div>
                    <div className={styles.inline}>
                        작성 댓글
                    </div>
                    <div className={styles.inline}>
                        작성 북마크
                    </div>
                </div>
                <div className={styles.box}>
                    추천받은 콘텐츠
                </div>
                <div className={styles.box}>
                    문의하기
                </div>
                <div className={styles.box}>
                    환경설정
                </div>
            </div>
        );
    }
}

export default User;