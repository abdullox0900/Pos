// Import React
import React from "react";

// Import Style Components
import "../Main/Main.scss";

// Import Components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Search from "../../Components/Search/Search";
import Table from "../../Components/Table/Table";

function Main() {
    return (
        <>
            <section className="main">
                <Sidebar />
                <div className="main__content-centir">
                    <Search />
                    <Table/>
                </div>
                
            </section>
        </>
    )
}

export default Main;