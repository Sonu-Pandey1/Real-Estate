
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularLocalitiesSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=" bg-transparent container px-5">
            <div className="row align-items-center gap-5">
                <div className="col-3  mt-3 text-end">
                    <p className=" bg-light text-dark badge">Popular Localities</p>
                </div>
                <div className="col-7 ">
                    <div className="slider-container">

                        <Slider {...settings} className="ps-5 ">

                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1">Sector 84 &gt;</p>
                            </div>
                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1">Sector 48 &gt;</p>
                            </div>
                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1">Sector 34 &gt;</p>
                            </div>
                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1">Sector 24 &gt;</p>
                            </div>
                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1">Sector 29 &gt;</p>
                            </div>
                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1">Sector 18 &gt;</p>
                            </div>
                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1 ">Sector 14 &gt;</p>
                            </div>
                            <div className=" text-center w-75">
                                <p className="m-0 rounded-2 bg-light py-1">Sector 2 &gt;</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopularLocalitiesSlider


