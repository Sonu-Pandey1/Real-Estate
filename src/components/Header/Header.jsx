import { useState } from "react"
import "../../index.css"
import "./Header.css"
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"

export default function Header() {
    const [menuOpened, setMenuOpened] = useState(false)
    console.log(menuOpened)

    let getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }

    }

    return (


        <section className=" h-wrapper mx-3">
            <div className="paddings innerWidth h-container flexCenter">

                <img src="./logo.png" alt="logo" width={100} />

                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOpened(false)
                }}>
                    <div className=" flexCenter h-menu" style={getMenuStyle(menuOpened)}>

                        <a href="">Residencies</a>
                        <a href="">Contact us</a>
                        <a href="">get started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>



        </section>
    )
}