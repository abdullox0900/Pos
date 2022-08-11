// Import React
import React from "react";

// Import Style Components
import "../Sidebar/Sidebar.scss";

// Import Components

function Sidebar() {
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
                    <li className="sidebar__item">
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
        </>
    )
}

export default Sidebar;
