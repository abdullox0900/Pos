// Import React 
import React from "react";

// Import Style Component
import "../Calculator/Calculator.scss";

function Calculator() {
    return (
        <>
            <section className="calcul">
                <div className="calcul-header">
                    <h3 className="calcul-header__num">Номер чека 77157</h3>
                    <div className="calcul-header__set">
                        <div className="calcul-header__tolal">Итого</div>
                        <div className="calcul-header__total-num">0</div>
                    </div>

                    <div className="calcul-header__set">
                        <div className="calcul-header__text">Получено</div>
                        <span className="calcul-header__text-num">0</span>
                    </div>
                    <div className="calcul-header__set">
                        <div className="calcul-header__text">Сдача</div>
                        <span className="calcul-header__text-num">0</span>
                    </div>
                </div>

                <div className="calcul-footer">
                    <div className="calcul__box">
                        <button className="calcul__number-btn calcul__number-top">
                            <ion-icon name="trash-outline"></ion-icon>
                            </button>
                    
                        <input value={"-"} type="button" className="calcul__number-btn calcul__number-top"/>
                        <input value={"+"} type="button" className="calcul__number-btn calcul__number-top"/>
                    </div>
                    <div className="calcul__box">
                        <input value={1} type="button" className="calcul__number-btn calcul__border-btn"/>
                        <input value={2} type="button" className="calcul__number-btn"/>
                        <input value={3} type="button" className="calcul__number-btn calcul__border-btn" />
                        <input value={4} type="button" className="calcul__number-btn"/>
                        <input value={5} type="button" className="calcul__number-btn"/>
                        <input value={6} type="button" className="calcul__number-btn"/>
                        <input value={7} type="button" className="calcul__number-btn"/>
                        <input value={8} type="button" className="calcul__number-btn"/>
                        <input value={9} type="button" className="calcul__number-btn"/>
                        <input value={0} type="button" className="calcul__number-btn calcul__border-btn"/>
                        <input value={"."} type="button" className="calcul__number-btn "/>
                        <button className="calcul__number-btn calcul__border-btn">
                            <ion-icon name="backspace-outline"></ion-icon>
                        </button>
                    </div>
                    <button className="calcul__submit-btn">ОПЛАТА</button>
                </div>
            </section>
        </>
    )
}

export default Calculator