import React, { useState } from 'react';
import styles from './Header.module.css';

// PCで常に表示する主要メニュー
const mainMenuItems = [
    { href: '/playlist', label: 'Playlist' },
    { href: '/radar', label: 'Radar' },
    { href: '/cafe', label: 'Cafe' },
    { href: '/world', label: 'World' },
    { href: '/check', label: 'Check' },
    { href: '/report', label: 'Report' },
];

// メニューで表示する追加メニュー
const extraMenuItems = [
    { href: '/request', label: '楽曲追加リクエスト' },
    { href: '/import', label: 'マイリストのインポート' },
    { href: '/faq', label: 'FAQ' },
    { href: '/dev-history', label: '開発履歴' },
    { href: '/feedback', label: 'フィードバック' },
    { href: '/twitter', label: 'Twitter' },
];

// 全てのメニュー項目
const allMenuItems = [...mainMenuItems, ...extraMenuItems];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                {/* ロゴ */}
                <div className={styles.logo}>
                    <a href="/">K!!te</a>
                </div>

                {/* PC用ナビゲーション */}
                <nav className={styles.pcNav}>
                    <ul>
                        {mainMenuItems.map((item) => (
                            <li key={item.href}><a href={item.href}>{item.label}</a></li>
                        ))}
                        <li>
                            <button className={styles.moreMenuButton} onClick={toggleMenu}>
                                ...
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* ハンバーガーアイコン (スマホ用) */}
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {/* モーダルメニュー */}
            {isMenuOpen && (
                <div className={styles.menuOverlay} onClick={toggleMenu}>
                    <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
                        <ul>
                            {allMenuItems.map((item) => (
                                <li key={item.href}><a href={item.href}>{item.label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;