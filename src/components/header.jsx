import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ★ react-router-dom から Link をインポート
import styles from './Header.module.css';
import logoImage from '../assets/logo.png';

// PCで常に表示する主要メニュー
const mainMenuItems = [
    { href: '/', label: 'カレンダー' },
    { href: 'https://forms.gle/Dq2ntBekUoPsYE9h7', label: '新規ツアー' },
    { href: 'https://forms.gle/rP8oDgJ5eWkc6bgb8', label: 'ツアー削除' },
    { href: '/description', label: '使い方説明' },
];

// メニューで表示する追加メニュー
const extraMenuItems = [
    { href: '/request', label: '公募中の一覧' },
    { href: '/import', label: '拡張機能' },
    { href: '/faq', label: 'Q&A' },
    { href: '/twitter', label: '問い合わせ' },
];

// 全てのメニュー項目
const allMenuItems = [...mainMenuItems, ...extraMenuItems];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // ★ リンクを条件に応じて出し分けるためのコンポーネント
    const NavLink = ({ href, children }) => {
        // hrefが 'http' で始まる場合は外部リンクと判断
        if (href.startsWith('http')) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        // それ以外は内部リンクとしてLinkコンポーネントを使用
        return <Link to={href}>{children}</Link>;
    };

    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                {/* ロゴ */}
                <div className={styles.logo}>
                    <Link to="/"> {/* ロゴは必ず内部リンクのトップページへ */}
                        <img src={logoImage} alt="Kite Logo" />
                    </Link>
                </div>

                {/* PC用ナビゲーション */}
                <nav className={styles.pcNav}>
                    <ul>
                        {mainMenuItems.map((item) => (
                            <li key={item.label}>
                                <NavLink href={item.href}>{item.label}</NavLink>
                            </li>
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
                                <li key={item.label}>
                                    <NavLink href={item.href}>{item.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;