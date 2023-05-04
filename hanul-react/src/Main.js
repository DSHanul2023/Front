import React from 'react';
import styles from "./Main.module.css";
class Main extends React.Component{
    render(){
        return(
            <div>
                <div className={styles.centerbox}>
                    <div className={styles.logobox}>
                        <div className={styles.logo}>We:lover</div>
                        <div className={styles.mainImg}>
                        </div>
                    </div>
                    <div className={styles.weatherbox}>
                        <ul>
                            
                            <div className={styles.weathericon}>
                                <i class="fa fa-sun"></i>
                            </div>
                            <div className={styles.weathericon}>
                                <i class="fa fa-cloud-rain"></i>
                            </div>
                            <div className={styles.weathericon}>
                                <i class="fa fa-align-center"></i>
                            </div>
                            <div className={styles.weathericon}>
                                <i class="fa fa-temperature-high"></i>
                            </div>
                            
                        </ul>
                    </div>
                    <div className={styles.bottombox}>
                        <div className={styles.community}>Community</div>
                        <div className={styles.communityicon}>
                            <i class="fa fa-hospital"></i>
                        </div>
                        <div className={styles.communityicon}>
                            <i class="fa fa-podcast"></i>
                        </div>
                        <div className={styles.communityicon}>
                            <i class="fa fa-basketball-ball"></i>
                        </div>
                        <div className={styles.communityicon}>
                            <i class="fa fa-laugh-wink"></i>
                        </div>
                        <div>
                        <div className={styles.ctext}>병원 후기</div>
                        <div className={styles.ctext}>우리 동네</div>
                        <div className={styles.ctext}>취미 활동</div>
                        <div className={styles.ctext}>자유 게시판</div></div>
                    </div>
                </div>
                <div className={styles.rightbox}>
                    <div>
                        <div className={styles.roundbox}>
                            <i id='usericon' class="fa fa-user"></i>
                        </div>
                        <div className={styles.jointext}>Join us!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;