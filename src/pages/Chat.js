import React from 'react'
import styles from "./Chat.module.css";

/**
 * 채팅 페이지 구현을 위한 클래스
 * 
 */

class Chat extends React.Component{
    render () {
        return(
            <div className={styles.default}>
                <div className={styles.topbox}>
                    <div className={styles.dog}></div>
                </div>

                <div className={styles.centerbox}>
                <div className={styles.chatImg}></div>
                </div>
                <div className={styles.textbox}>
                <div className={styles.text}>텍스트를 입력하세요</div>
                </div>
            </div>
        );
    }
}

export default Chat;