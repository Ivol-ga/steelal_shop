import React from 'react';
import ReactDom from 'react-dom';
import { Header } from './components/Header/index';
import { Cards } from './components/Cards';
import { BlockAbout } from './components/BlockAbout';
import { Footer } from './components/Footer';

export const App = () => {
    return (
        <>
        <Header/>
        <BlockAbout/>
        <main className="content container">
<div className="content__cards">
    <Cards/>
</div>

        </main>
        <Footer/>

        </>
    )
}