// Import React
import React from "react";

// Import Style Components
import "../Search/Search.scss";

function Search() {
    return (
        <>
            <section className="search">
                {/* <div className="search__icon"> */}
                    <ion-icon name="search-outline"></ion-icon>
                {/* </div> */}
                <input className="search__input" type="text" placeholder="Поиск товаров" />
                <button className="search__btn">Быстрый продукты</button>
            </section>

        </>
    )
}

export default Search