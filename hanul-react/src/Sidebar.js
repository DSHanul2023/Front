import React from 'react';
import './App.css';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component{
    render(){
    return (
        <div className={styles.sidebar}>
        <div className={styles.sidebarmenu}>
            <ul>
                <li className={styles.has_sub}>
                    <i class="fa fa-bars"></i>
                </li>
                <li className={styles.has_sub}>
                    <i class="fa fa-home"></i>
                </li>
                <li className={styles.has_sub}>
                    <i class="fa fa-comment"></i>
                </li>
                <li className={styles.has_sub}>
                    <i class="fa fa-users"></i>
                </li>
                <li className={styles.has_sub}>
                    <i class="fa fa-user"></i>
                </li>
                <li className={styles.has_sub} id="bell">
                    <i class="fa fa-bell"></i>
                </li>
                
            </ul>
            </div>
        </div>
        );
    }
}

export default Sidebar;
