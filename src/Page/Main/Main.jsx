// Import React
import React from "react";

// Import Style Components
import "../Main/Main.scss";

// Import Components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Search from "../../Components/Search/Search";
import Table from "../../Components/Table/Table";
import Calculator from "../../Components/Calculator/Calculator";

function Main() {
    return (
        <>
            <section className="main">
                <Sidebar />
                <div className="main__content-centir">
                    <Search />
                    <Table />
                </div>
                <Calculator />
            </section>
        </>
    )
}

export default Main;