import React from 'react';
import Calendar from '../components/Calendar';
// import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <h1>非公式サイトです</h1>
            <a href="http://world.kiite.jp">Kiite World</a><br />
            <a href="https://note.com/mityamk02/n/n044d7cec2f3f">Kiite Worldとは</a><br />
            <a href="https://icepq.github.io/wkkw/description">WKKW（非公式サイト）とは</a><br /><br />

            <Calendar />

        </div>
    );
};

export default Home;