// Import React
import React from "react";

// Import Style Components
import "../Table/Table.scss"

function Table() {

    const thName = ["#", "НАЗВАНИЕ", "ЦЕНА", "КОЛ-ВО", "ИТОГО"]
    const trArr = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <section className="table">

                <div className="table__tr table__wh">
                    {
                        thName.map(name => {
                            return (
                                <>
                                    <div className="table__top-th table__th">{name}</div>
                                </>
                            )
                        })
                    }
                </div>

                <div className="table__buttom">
                    {
                        trArr.map(tr => {
                            return (
                                <>
                                    <div className="table__tr table__ex"></div>
                                    <div className="table__tr table__wh"></div>
                                </>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Table