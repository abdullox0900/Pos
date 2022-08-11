// Import React
import React from "react";

// Import Style Components
import "../Main/Main.scss";

// Import Components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Search from "../../Components/Search/Search";

function Main() {
    return (
        <>
            <section className="main">
                <Sidebar />
                <div>
                    <Search />
                </div>
            </section>
        </>
    )
}

export default Main;