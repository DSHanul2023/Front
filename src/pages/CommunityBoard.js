import React from 'react'
import styles from "./CommunityBoard.module.css";

/**
 * 커뮤니티 게시판 페이지 구현을 위한 클래스
 * 
 */

class CommunityBoard extends React.Component{
    render () {
        return(
            <div className={styles.default}>
                <div className={styles.searchbox}>
                    <div className={styles.inlinetext}>제목</div>
                    <div className={styles.inlinetext}>우리 동네</div>
                    <div className={styles.inlinetext}>취미활동</div>
                    <div className={styles.inlinetext}>자유게시판</div>
                </div>
                <table className={styles.board}>
                <tr>
                </tr>
                </table>
                </div>
        );
    }
}

export default CommunityBoard;