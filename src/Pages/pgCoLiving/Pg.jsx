import { NavLink } from "react-router-dom";
import BlogCard from "../../Components/BlogCard";
import PopularLocalitiesSlider from "../../Components/PopularLocalitiesSlider";
import "./Pg.scss";

export default function Pg() {

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const blogData = [
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/07/Top-areas-in-Noida-Extension-for-investment-f.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        "With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: " Sonu Pandey",
      publishTime: "Aug 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2018/04/Buying-in-a-project-on-a-leasehold-plot-f.jpg",
      title: "Buying a project on a leasehold plot: What you should know?",
      description:
        "A property  infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential where you lease the land from a landlord for a specific period is called leasehold property.",
      writerName: "Khushboo",
      publishTime: "Sep 2024",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/02/29105827/Jewar-Airport-No-significant-gains-for-the-property-market-FB-1200x700-compressed.jpg",
      title:
        "Everything you want to know about Noida International Airport at Jewar",
      description:
        "The Noida  infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential International Airport at Jewar is slated to be operational by April 2025",
      writerName: "Riyhan",
      publishTime: "Oct 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/05/Noida-metro-aqua-line-extension-F.jpg",
      title: "Noida Metro receives approval for Aqua Line Extension",
      description:
        "Under this infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential extension project, 11 new metro stations will be added to the Aqua Line.",
      writerName: "Sonu Pandey",
      publishTime: "Nov 2024",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/07/22174727/Everything-home-buyers-need-to-know-about-the-repo-rate-and-how-it-affects-them-FB-1200x700-compressed.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        "With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: "Sonu Pandey",
      publishTime: "Aug 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/02/Mahindra-Lifespaces-launches-plotted-development-project-in-Chennai-f.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        "With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: "Sonu Pandey",
      publishTime: "Aug 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/05/Godrej-Properties-achieves-over-Rs-2000-cr-through-launch-of-Godrej-Jardinia-in-Noida-f.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        " infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: "Sonu Pandey",
      publishTime: "Aug 2024",
    },
  ];
  return (
    <>
      <div className="pgContainer">
        <section>
          <div className="container">
            <div className="row">
              <div className="col p-0">
                <div className="imgWrapper">
                  <img
                    className=""
                    src="https://c.housingcdn.com/demand/s/client/common/assets/homeAtSight.f25d6e4c.png"
                    alt="image"
                  />
                </div>
                <div className="contentWrapper pt-5 w-100 p-4 ">
                  <h2 className="mb-4 ">
                    Home at <span className=" fw-medium">First Sight</span>
                  </h2>

                  <p className="">
                    <img
                      className="pe-3"
                      src="https://c.housingcdn.com/demand/s/client/common/assets/yellowTick.14ad7efc.svg"
                      alt="icon"
                    />
                    <span>Verified & Onboarded by our experts</span>
                  </p>
                  <p>
                    <img
                      className="pe-3"
                      src="	https://c.housingcdn.com/demand/s/client/common/assets/homeLogoSmall.451bfb8a.svg"
                      alt="icon"
                    />
                    <span>Every property detail on just a click</span>
                  </p>
                  <p>
                    <img
                      className="pe-2"
                      src="https://c.housingcdn.com/demand/s/client/common/assets/userBase.5717c844.svg"
                      alt="icon"
                    />
                    <span className="ps-1">Genuine & vast userbase</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container my-5 pt-5">
            <div className="row">
              <div className="col">
                <h2 className=" fw-normal">
                  Benefits of our <span className=" fw-medium">PG/Co-Living</span>
                </h2>
                
                <div className=" imagesWrapper d-flex justify-content-between flex-wrap flex-sm-nowrap text-center pt-5">
                  <div className=" text-center mx-auto">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/stressFreeSearch.803f8c7e.png"
                      alt="icon"
                    />
                    <h6 className="pt-4">Stress free search</h6>
                    <p className=" w-75 mx-auto text-muted">
                      Real property photos and Transparent pricing
                    </p>
                  </div>
                  <div className="mx-auto">
                    <img
                      src="	https://c.housingcdn.com/demand/s/client/common/assets/findYourMatch.8b4c0fa5.png"
                      alt="icon"
                    />
                    <h6 className="pt-4">Find your Match</h6>
                    <p className=" w-100 mx-auto text-muted">
                      Lots of options to choose from (private, twin &
                      multi-sharing)
                    </p>
                  </div>
                  <div className="mx-auto">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/bonAppetite.c1028fc9.png"
                      alt="icon"
                    />
                    <h6 className="pt-4">Bon appetite</h6>
                    <p className=" w-100 mx-auto text-muted">
                      Info on meal type and offerings to know what’s cooking
                    </p>
                  </div>
                  <div className="mx-auto">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/yourLife.d015d745.png"
                      alt="icon"
                    />
                    <h6 className="pt-4">Your Life, Your Rules</h6>
                    <p className=" w-75 mx-auto text-muted">
                      Advance info on house rules to live like you do
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pgCounter my-5">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-evenly  pt-3 ">
                <div>
                  <h1>30k+</h1>
                  <p>Properties</p>
                </div>
                <div>
                  <h1>40+</h1>
                  <p>Cities</p>
                </div>
                <div>
                  <h1>3.5 lakh+</h1>
                  <p>Monthly users</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col pgsOptions overflow-hidden">
                <h2 className=" fw-normal">
                  Our handpicked <span className=" fw-medium">Collections</span>
                </h2>
                <div className="row g-3 py-4 text-light">
                  {/* For Guys */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center">
                      <img
                        src="https://c.housingcdn.com/s/assets/boys.3f91606a.jpg"
                        alt="For Guys"
                        className="img-fluid rounded"
                      />
                      <div>
                        <h5>For Guys</h5>
                      </div>
                    </div>
                  </div>

                  {/* For Girls */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center">
                      <img
                        src="https://c.housingcdn.com/s/assets/girls.3c3d64c0.jpg"
                        alt="For Girls"
                        className="img-fluid rounded"
                      />
                      <div>
                        <h5>For Girls</h5>
                      </div>
                    </div>
                  </div>

                  {/* Food Available */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center">
                      <img
                        src="https://c.housingcdn.com/s/assets/food.781fbd56.jpg"
                        alt="Food Available"
                        className="img-fluid rounded"
                      />
                      <div>
                        <h5>Food Available</h5>
                      </div>
                    </div>
                  </div>

                  {/* Private Room */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center ">
                      <img
                        src="https://c.housingcdn.com/s/assets/private.202ecdb3.jpg"
                        alt="Private Room"
                        className="img-fluid rounded"
                      />
                      <div>
                        <h5 className="  ">Private Room</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article>
            <section className="NewsArticles mt-3 mb-4">
              <div className="container">
                <div className="row">
                  <div className="col pb-4">
                    <h2>
                      <span className="opacity-75 fs-3">News &</span> Articles
                    </h2>
                    <p className="m-0">Know what`s happening in Real Estate.</p>
                    <img
                      className="imgg"
                      src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                      alt="line"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <PopularLocalitiesSlider settings={settings2}>
                      {blogData.map((blogData, index) => (
                        <div key={index} className="">
                          <NavLink className={"text-decoration-none text-dark"} to={"/news-articles"}>
                            <BlogCard
                              image={blogData.image}
                              title={blogData.title}
                              description={[blogData.description]}
                              writerName={blogData.writerName}
                              publishTime={blogData.publishTime}
                            />
                          </NavLink>
                        </div>
                      ))}
                    </PopularLocalitiesSlider>
                  </div>
                </div>
              </div>
            </section>
          </article>
      </div>
    </>
  );
}
