// Import React
import React, { useRef } from "react";

// Import Style Components
import "../Blockwz/Blockwz.scss";

function Blockwz({ elBlock }) {

    const elClose = React.useRef()

    return (
        <>
            <div ref={elBlock} className="block-overlay">
                <div className="block-close" onClick={() => {
                    // elBlock.current.classList.add("block--clos")
                    elBlock.current.classList.remove("block--open")
                }}>
                    <ion-icon name="lock-open-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}

export default Blockwz