import React from "react";
import ProductCards from "./ProductCards";
import GenresMenu from "./GenresMenu";
import CountPage from "./CountPage";


export default function ProductROUTE() {
    return (
        <>
            <div className="menu">
                <GenresMenu />
            </div>

            <div className="work-area">
                <ProductCards />
                <CountPage />
            </div>
        </>
    );
}