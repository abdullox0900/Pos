import React from "react";

// Import Style Components
import "../SignIn/SignIn.scss";

// Import Components
import SignLogo from "../../Assets/Img/sign-logo.svg";

function SignIn() {
    return (
        <>
            <section className="sign">

                <section className="sign__left">
                    <div>
                        <img className="sign__logo-img" src={SignLogo} alt="logo" width={60} height={60} />
                        <h1 className="sign__title">
                            Войдите в свою учетную запись
                        </h1>

                        <form className="sign__form">
                            <label className="sign__label">
                                Номер телефона
                                <input className="sign__input-number sign__input" type="text" />
                            </label>

                            <label className="sign__label">
                                Пароль
                                <input className="sign__input-password sign__input" type="password" />
                            </label>

                            <button className="sign__btn">Войти в систему</button>
                        </form>
                    </div>
                </section>

                <section className="sign__right">
                    {/* <img className="sign__img" src={SignImg} alt="sign-in-img" width={400} height={500} /> */}
                </section>
            </section>
        </>
    )
}

export default SignIn;