import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';

import Gallery from './components/Gallery'; 

function App() {
    return (
        <div>
            <h1>Лабораторна робота №7</h1>
            
            <h2>Завдання 1: Реалізація Лабораторної №4 у React</h2>
            <Header />
            <Content />
            <Image />
            
            <hr style={{ margin: '50px 0' }}/>
            
            <h2>Завдання 2: Галерея товарів</h2>
            <Gallery /> 
        </div>
    );
}

export default App;