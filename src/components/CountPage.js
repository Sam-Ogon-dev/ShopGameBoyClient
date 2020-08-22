import React from "react";
import {connect} from "react-redux";
import changeFilterAction from "../Actions/changeFilterAction";
import {getGames} from "../service";

function CountPage({count, filterState, size, changeFilterAction}) {
    const currentPage = filterState.currentPage.number;
    const phase = filterState.currentPage.phase;
    const [pageArr, setPageArr] = React.useState([]);

    function turnPage(action, activePage) {
        let newPhase = phase;
        switch (action) {
            case "next":
                newPhase += size + 1;
                activePage = newPhase;
                break;
            case "back":
                newPhase -= size + 1;
                activePage = newPhase + size;
                break;
            case "turn":
                break
        }

        changeFilterAction({...filterState, currentPage: {...pageArr[activePage], phase: newPhase}});
        getGames();
    }

    React.useEffect(() => {
        let newPageArr = [];
        let position = 0;

        for (let i = 1; i <= Math.ceil(count / size); i++) {
            newPageArr[i] = {number: i, position: position};
            position += size;
        }

        setPageArr(newPageArr);
    }, [count]);


    return (
        <>
            {count / size < 2 ? "" :
                <div className="count-page">
                    {phase > 0 ?
                        <div className="page-item"
                             onClick={ () => turnPage("back") }>...</div>
                        : ""}

                    {pageArr.map((item, index) => {
                        if(index < phase || index > phase + size) { return }

                        return <div className={"page-item" + (currentPage === +item.number ? " active-simple" : "")}
                             key={index}
                             onClick={e => {
                                 e.persist();
                                 turnPage("turn", +e.target.innerText)
                             }}
                        >
                            {item.number}
                        </div>
                        }
                    )}

                    {phase+size < (count / size) ?
                        <div className="page-item"
                             onClick={ () => turnPage("next") }>...</div>
                        : ""}
                </div>
            }
        </>
    );
}

function mapStateToProps(store) {

    return {count: store.gameListReducer.gameList.count,
            filterState: store.filterReducer,
            size: store.filterReducer.size};
}

const mapDispatchToProps = {
    changeFilterAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CountPage);


//phase засунуть в редакс в currentPage