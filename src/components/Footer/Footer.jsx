
// import React from 'react'
import "../Footer/Footer.css"

export default function Footer() {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="logo2.png" alt="img" width={120} />
                    <span className="secondaryText">
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </span>
                </div>

                {/* right side */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">145 new yark , usa</span>
                    <div className="flexCenter f-menu">
                    <sapn>Property</sapn>
                    <sapn>Services</sapn>
                    <sapn>Product</sapn>
                    <sapn>About Us</sapn>

                    </div>
                </div>

            </div>
        </section>

    )
}
