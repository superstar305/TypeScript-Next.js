import React from 'react';
import SideBar from './SideBar/SideBar';
import SideBarDetail from './SideBarDetail/SideBarDetail';

import styles from './SideBarLayout.module.scss';

const SideBarLayout = () => (
    <>
        <div className= {`${styles.flex} ${styles.hFull} ${styles.w26m} ${styles.borderR} ${styles.flexNone}`}>
            <SideBar />
            <SideBarDetail />
        </div>
    </>
)

export default SideBarLayout;