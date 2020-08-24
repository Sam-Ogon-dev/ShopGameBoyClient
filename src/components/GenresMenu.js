import React from "react";
import Arrow_2 from "../assets/arrow_2.png";
import {connect} from "react-redux";
import changeFilterAction from "../Actions/changeFilterAction";
import {getGames} from "../service";
import changeGameListAction from "../Actions/changeGameListAction";
import {ADDRESS} from "../settings";

function GenresMenu({filterReducer, changeFilterAction}) {

    const [genres, setGenres] = React.useState([]);

    React.useEffect(() => {
        fetch(ADDRESS + "/genres")
            .then(r => r.json())
            .then(r => setGenres(r));
    }, []);


    function changeFilterValue(label, toDefault, targetElement) {
        switch (filterReducer[label]) {
            case false:
                changeFilterAction({...filterReducer, [label]: "up", [toDefault]: false})
                targetElement.classList = "title-simple neutral-button active-simple";
                break;
            case "up":
                changeFilterAction({...filterReducer, [label]: "down"})
                targetElement.classList = "title-simple neutral-button active-rotate";
                break;
            case "down":
                changeFilterAction({...filterReducer, [label]: false})
                targetElement.classList = "title-simple neutral-button";
                break;
        }
    }


    return (
        <>
            {genres.map(genre =>
                <div key={genre.id} className="menu-item" onClick={() => {
                    changeFilterAction({...filterReducer, genre: genre.id, currentPage:{number: 1, position: 0, phase: 0}});
                    getGames();
                }}>{genre.title}</div>
            )}

            <div className="filter">
                <div className="title-main">Cортировка по:</div>
                <div className="control-panel">

                    <div id="priceFilter" className={"title-simple neutral-button" + (filterReducer.price ? " active-simple" : "")}
                         onClick={ e => { e.persist(); changeFilterValue("price", "rating", e.target)} }>
                        <span className="not-active">цена</span>
                        <img className="not-active" src={Arrow_2} alt="arrow"/>
                    </div>

                    <div id="ratingFilter" className={"title-simple neutral-button" + (filterReducer.rating ? " active-simple" : "")}
                         onClick={ e => { e.persist(); changeFilterValue("rating", "price", e.target)} }>
                        <span className="not-active">рейтинг</span>
                        <img className="not-active" src={Arrow_2} alt="arrow"/>
                    </div>


                    <select id="gamesFilter" className="title-simple neutral-button"
                            value={filterReducer.genre}
                            onChange={e => {
                                e.persist();
                                changeFilterAction({...filterReducer, genre: e.target.value})
                            }}
                    >
                        {genres.map(genre =>
                            <option key={genre.id} value={genre.id}>{genre.title}</option>
                        )}
                    </select>

                </div>

                <input id="wordFilter" className="title-simple" placeholder="Поиск по названию..."
                       onChange={ e => {
                           e.persist();
                           changeFilterAction({...filterReducer, searchTitle: e.target.value})
                       }}
                />

                <div className="control-panel">
                    <button className="neutral-button accept" onClick={ () => {
                        changeFilterAction({...filterReducer, currentPage:{number: 1, position: 0, phase: 0}});
                        getGames();
                    }}>Применить</button>

                    <button className="neutral-button" onClick={() => {
                        changeFilterAction();
                        getGames();
                    }}>Сбросить</button>
                </div>
            </div>
        </>
    );
}

function mapStateToProps(store) {
    return store
}

const mapDispatchToProps = {
    changeFilterAction,
    changeGameListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresMenu);