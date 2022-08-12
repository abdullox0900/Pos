// Import React
import React, { useRef } from "react";

// Import Style Components
import "../Sidebar/Sidebar.scss";

// Import Components
import Blockwz from "../Blockwz/Blockwz";

function Sidebar() {

    const elBlock = React.useRef();

    console.log(elBlock)

    return (
        <>
            <section className="sidebar">

                <ul className="sidebar__list-top">
                    <li className="sidebar__item">
                        <ion-icon name="tv-outline"></ion-icon>
                        <p className="sidebar__icon-title">POS</p>
                    </li>

                    <li className="sidebar__item">
                        <ion-icon name="settings-outline"></ion-icon>
                        <p className="sidebar__icon-title">Настройки</p>
                    </li>
                </ul>

                <ul className="sidebar__list-buttom">
                    <li className="sidebar__item" onClick={() => {
                        elBlock.current.classList.add("block--open")
                    }}>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <p className="sidebar__icon-title">Блокировка</p>
                    </li>

                    <li className="sidebar__item">
                        <ion-icon name="resize-outline"></ion-icon>
                        <p className="sidebar__icon-title">Блокировка</p>
                    </li>

                    <li className="sidebar__item">
                        <ion-icon name="log-out-outline"></ion-icon>
                        <p className="sidebar__icon-title">Выход</p>
                    </li>
                </ul>
            </section>

            <Blockwz elBlock={elBlock} />
        </>
    )
}

export default Sidebar;
