import React from "react";
import ProductCards from "./ProductCards";
import GenresMenu from "./GenresMenu";


export default function ProductROUTE() {
    return (
        <>
            <div className="menu">
                <GenresMenu />
            </div>

            <div className="work-area">
                <ProductCards />

                <div className="count-page">
                    <div className="page-item active-simple">1</div>
                    <div className="page-item">2</div>
                    <div className="page-item">3</div>
                    <div className="page-item">4</div>
                    <div className="page-item">5</div>
                    <div className="page-item">6</div>
                    <div className="page-item">7</div>
                    <div className="page-item">8</div>
                </div>
            </div>
        </>
    );
}