import React from 'react'
import styles from "./InquiryBoard.module.css";

/**
 * 문의 게시판 페이지 구현을 위한 클래스
 * 
 */

class InquiryBoard extends React.Component{
    render () {
        return(
            <div className={styles.default}>
                <div className={styles.searchbox}>
                    <div className={styles.inlinetext}>제목</div>
                    <div className={styles.inline}></div>
                </div>
                <table className={styles.board}>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일</td>
                </tr>
                </table>
            </div>
        );
    }
}

export default InquiryBoard;