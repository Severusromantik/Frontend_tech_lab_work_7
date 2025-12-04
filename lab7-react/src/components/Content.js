import React, { Component } from 'react';

class Content extends Component {
    state = {
        isTargetIdToggled: false,
        isTargetQueryToggled: false
    };

    handleIdClick = () => {
        this.setState(prevState => ({
            isTargetIdToggled: !prevState.isTargetIdToggled
        }));
    };

    handleQueryClick = () => {
        this.setState(prevState => ({
            isTargetQueryToggled: !prevState.isTargetQueryToggled
        }));
    };

    render() {
        const idClassName = this.state.isTargetIdToggled ? 'color-toggle-id' : '';
        const queryClassName = this.state.isTargetQueryToggled ? 'color-toggle-query' : '';

        return (
            <main>
                <h3 id="target-id" onClick={this.handleIdClick} className={idClassName}>
                    Улюблені книги:
                </h3>

                <ol id="target-query" onClick={this.handleQueryClick} className={queryClassName}>
                    <li>"Габсбурги" М.Рейді</li>
                    <li>"Про Китай" Г.Кісінджер</li>
                    <li>"Мемуари. Том 1" К.Г.Маннергейм</li>
                </ol>

                <p>
                    Будапешт (угор. Budapest) — столиця та найбільше місто Угорщини, адміністративний центр Центральної Угорщини,
                    <br />
                    а також центр медьє Пешт. Місто розташоване на обох берегах Дунаю: Буда і Обуда — на правому, Пешт — на лівому.
                </p>
                <p>
                    У IX столітті на місці сучасного Будапешта існували поселення угорських племен.
                    <br />
                    У ХІІ–ХV століттях Буда була столицею Угорського королівства.
                    <br />
                    У 1541–1686 рр. перебувала під владою Османської імперії.
                    <br />
                    У 1867 році, після утворення Австро-Угорщини, Буда, Пешт та Обуда були об’єднані в одне місто — Будапешт, яке стало спільною столицею.
                    <br />
                    З 1918 року — столиця незалежної Угорщини.
                </p>
            </main>
        );
    }
}

export default Content;