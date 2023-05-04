import React from "react";
import styles from "./Save.module.css";
class Save extends React.Component {
  render() {
    return (
      <div className={styles.saveframe}>
        <div className={styles.savetitle}>저장된 컨텐츠</div>
        <div className={styles.icons}>
        <i class="fa fa-plus"></i>
        <i class="fa fa-bars"></i>
        </div>
        <div className={styles.savebox}>
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <div className={styles.folderImg}></div>
              <div className={styles.ctext}>폴더 이름</div>
            </div>
            <div className={styles.grid_item}>
              <div className={styles.contentpreview}></div>
              <div className={styles.ctext}>컨텐츠 이름</div>
            </div>
            <div className={styles.grid_item}>
              <div className={styles.contentpreview}></div>
              <div className={styles.ctext}>컨텐츠 이름</div>
            </div>
            <div className={styles.grid_item}>
              <div className={styles.contentpreview}></div>
              <div className={styles.ctext}>컨텐츠 이름</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Save;
