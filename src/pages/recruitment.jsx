// 公募ページ
import React from 'react';
import Rec_Calendar from '../components/Rec_Calendar';
// import style from './Recruitment.module.css';

const Recruitment = () => {
    return (
        <div>
            <a>
                ツアー主催者が、ツアー内で使用する楽曲やプレイリストを募集する際の、
                応募フォームのリンクを収集しています。<br />
                こちらのフォームを活用すると、非公式カレンダー上に募集情報が掲載されます。</a>
            <h1><a href="https://forms.gle/whQTwe9Lw8h1RiaD6" target="_blank" rel="noopener noreferrer">応募はココから</a></h1>
            <Rec_Calendar />
        </div>
    );
};

export default Recruitment;
