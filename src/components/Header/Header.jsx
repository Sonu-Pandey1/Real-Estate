import "../../index.css"
import "./Header.css"

export default function Header() {
    return (
        <section className=" h-wrapper mx-3">
            <div className="paddings innerWidth h-container flexCenter">

                <img src="./logo.png" alt="logo" width={100} />

                <div className=" flexCenter h-menu">

                    <a href="">Residencies</a>
                    <a href="">Contact us</a>
                    <a href="">get started</a>
                    <button className="button">
                    <a href="">Contact</a>
                    </button>

                </div>
            </div>

        </section>
    )
}