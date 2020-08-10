import React from "react";
import Arrow_2 from "../assets/arrow_2.png";
import {connect} from "react-redux";
import changeFilterAction from "../Actions/changeFilterAction";

function GenresMenu({mapDispatchToProps}) {

    const [filter, setFilter] = React.useState({
        price: false,
        rating: false,
        genre: "",
        searchTitle: ""
    });

    const [genres, setGenres] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/genres")
            .then(r => r.json())
            .then(r => setGenres(r));
    }, []);


    function changeFilterValue(label, toDefault, targetElement) {
        switch (filter[label]) {
            case false:
                setFilter(filter => ({...filter, [label]: "up"}));
                targetElement.classList = "title-simple neutral-button active-simple";
                break;
            case "up":
                setFilter(filter => ({...filter, [label]: "down"}));
                targetElement.classList = "title-simple neutral-button active-rotate";
                break;
            case "down":
                setFilter(filter => ({...filter, [label]: false}));
                targetElement.classList = "title-simple neutral-button";
                break;
        }
        setFilter(filter => ({...filter, [toDefault]: false}));
    }


    return (
        <>
            {genres.map(genre =>
                <div key={genre.id} className="menu-item">{genre.title}</div>
            )}

            <div className="filter">
                <div className="title-main">Cортировка по:</div>
                <div className="control-panel">

                    <div className={"title-simple neutral-button" + (filter.price ? " active-simple" : "")}
                         onClick={ e => {e.persist(); changeFilterValue("price", "rating", e.target)} }>
                        <span className="not-active">цена</span>
                        <img className="not-active" src={Arrow_2}/>
                    </div>

                    <div className={"title-simple neutral-button" + (filter.rating ? " active-simple" : "")}
                         onClick={ e => {e.persist(); changeFilterValue("rating", "price", e.target)} }>
                        <span className="not-active">рейтинг</span>
                        <img className="not-active" src={Arrow_2}/>
                    </div>


                    <select className="title-simple neutral-button"
                            onChange={e => {
                                e.persist();
                                setFilter(oldState => ({...oldState, genre: e.target.value}))}
                            }>
                        {genres.map(genre => (<option key={genre.id}>{genre.title}</option>))}
                    </select>

                </div>

                <input className="title-simple" placeholder="Поиск по названию..."
                       onChange={ e => {
                           e.persist();
                           setFilter(oldState => ({...oldState, searchTitle: e.target.value}));
                       }}
                />

                <div className="control-panel">
                    <button className="neutral-button accept">Применить</button>
                    <button className="neutral-button">Сбросить</button>
                </div>
            </div>
        </>
    );
}

function mapStateToProps(store) {
    return store.filterReducer
}

const mapDispatchToProps = {
    changeFilterAction
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresMenu);