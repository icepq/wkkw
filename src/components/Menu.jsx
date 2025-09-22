import React, { useState } from 'react';
import styles from './Menu.module.css';

const HamburgerMenu = () => {
    // メニューが開いているかどうかの状態を管理
    const [isOpen, setIsOpen] = useState(false);

    // ボタンがクリックされたときに状態を切り替える関数
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.hamburgerMenu}>
            {/* ハンバーガーアイコンのボタン */}
            <button onClick={toggleMenu} className={styles.menuButton} aria-label="メニューを開閉する">
                {isOpen ? (
                    // 開いている時：✕ アイコン (SVG)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    // 閉じている時：三本線アイコン (SVG)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                )}
            </button>

            {/* ナビゲーションメニュー */}
            <nav className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/">ホーム</a></li>
                    <li className={styles.navItem}><a href="/about">アバウト</a></li>
                    <li className={styles.navItem}><a href="/contact">お問い合わせ</a></li>
                    <li className={styles.navItem}><a href="/products">製品情報</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;