// header.jsx

import React from 'react';
import styles from './header.module.css'; // CSS Modulesをインポート

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/">My App</a>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/">ホーム</a></li>
                    <li className={styles.navItem}><a href="/about">アバウト</a></li>
                    <li className={styles.navItem}><a href="/contact">お問い合わせ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;