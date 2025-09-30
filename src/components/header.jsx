import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    { href: '/recruitment', label: '公募中の一覧' },
    { href: '/extensions', label: '拡張機能' },
    // { href: '/faq', label: 'Q&A' },
    { href: '/inquiry', label: '問い合わせ' },
];

// 全てのメニュー項目
const allMenuItems = [...mainMenuItems, ...extraMenuItems];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // モーダル内のリンク専用のコンポーネント (クリックでメニューを閉じる機能付き)
    const ModalNavLink = ({ href, children }) => {
        if (href.startsWith('http')) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                    {children}
                </a>
            );
        }
        return <Link to={href} onClick={toggleMenu}>{children}</Link>;
    };

    // PCの通常メニュー用のリンクコンポーネント (クリックでメニューを閉じない)
    const PcNavLink = ({ href, children }) => {
        if (href.startsWith('http')) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return <Link to={href}>{children}</Link>;
    };

    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logoImage} alt="Kite Logo" />
                    </Link>
                </div>

                {/* PC用ナビゲーション */}
                <nav className={styles.pcNav}>
                    <ul>
                        {mainMenuItems.map((item) => (
                            <li key={item.label}>
                                <PcNavLink href={item.href}>{item.label}</PcNavLink>
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
                                    <ModalNavLink href={item.href}>{item.label}</ModalNavLink>
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