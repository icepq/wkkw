// 説明ページ
import React from 'react';
import Microlink from '@microlink/react';

// import styles from './Description.module.css';

const Description = () => {
    return (
        <div>
            {/* <h1>使い方説明</h1> */}

            <h3>
                <a href="https://doc.kiite.jp/">Kiiteとは？</a>
                <Microlink url="https://doc.kiite.jp/" /><br />

                <a href="https://note.com/shinku00/n/nb5721a1a30cb">Kiite Worldとは？</a>
                <Microlink url="https://note.com/shinku00/n/nb5721a1a30cb" /><br />

                <div>
                    ・WKKWとは<br />
                    - Kiite World非公式、それにまつわるサイト類です。<br /><br />
                    ・WKKWの機能一覧<br />
                    - <a href="https://icepq.github.io/wkkw/#/">当サイト</a><br />
                    - <a href="https://x.com/Kiite_ni_Kite">Twitter Bot</a><br />
                    - <a href="https://discord.gg/u2J6CSQCTz">Discord Bot</a><br />

                </div>

            </h3>
        </div>
    );
};

export default Description;