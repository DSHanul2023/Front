import React from 'react'
import styles from "./Admin.module.css";

/**
 * 관리자 페이지 구현을 위한 클래스
 * 
 */

class Admin extends React.Component{
    render () {
        return(
            <div className={styles.default}>
                <div className={styles.profile}>
                    <div className={styles.profileImg}>
                        
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>관리자</div>
                    </div>
                </div>
                <div className={styles.box}>
                    문의게시판
                </div>
                <div className={styles.box}>
                    서비스 관리
                </div>
                <div className={styles.box}>
                    콘텐츠 관리
                </div>
            </div>
        );
    }
}

export default Admin;