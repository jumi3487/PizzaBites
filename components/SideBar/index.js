import styles from './SideBar.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SideBar() {
    return (
        <div className={styles.sidebar}>
            {/* LOGO Image */}
            <div className={styles.logo}>
                <Image className={styles.logoImage} src={'/images/logo.png'} alt="LOGO Image" width="180" height="180"></Image>
            </div>
            
            {/* Side Bar Container */}
            <div className={styles.sideBarContainer}>
                {/* Replace <a> tags with Link components */}
                    <Link style={{ textDecoration: 'none' }} href="/" passHref>
                    <div className={styles.link}>
                        <Image className={styles.sideicon} src="/images/home.png" alt="Home Icon" width={25} height={25} />
                            HOME
                    </div>
                    </Link>
                    <Link  style={{ textDecoration: 'none' }} href="/menu" passHref>
                    <div className={styles.link}>
                    <Image className={styles.sideicon} src="/images/menu.png" alt="Home Icon" width={25} height={25} />
                        MENU
                    </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/about" passHref>
                    <div className={styles.link}>
                        <Image className={styles.sideicon} src="/images/info.png" alt="Home Icon" width={25} height={25} />
                        ABOUT US
                    </div>
                    </Link>

            </div>

            {/* Footer nested in Sidebar */}
            <div className={styles.footer}>
                <p> MDIA 2109 <br/> Dynamic Content Design
                    <br/>
                    @ 2024 Jumi Pham - D3 Set G
                </p>
            </div>
        </div>
    )
}
