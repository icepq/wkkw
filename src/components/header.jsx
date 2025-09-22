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

// ハンバーガーメニューで表示する全てのメニュー
const allMenuItems = [
    ...mainMenuItems, // 主要メニューを最初に展開
    { href: '/request', label: '楽曲追加リクエスト' },
    { href: '/import', label: 'マイリストのインポート' },
    { href: '/faq', label: 'FAQ' },
    { href: '/dev-history', label: '開発履歴' },
    { href: '/feedback', label: 'フィードバック' },
    { href: '/twitter', label: 'Twitter' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
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
                    </ul>
                </nav>
            </div>

            {/* ハンバーガーアイコン */}
            <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={handleClick}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {/* モバイル用/ハンバーガーメニュー用ナビゲーション */}
            <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
                <ul>
                    {allMenuItems.map((item) => (
                        <li key={item.href}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;