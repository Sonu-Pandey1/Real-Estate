import { NavLink } from "react-router-dom"
import PopularLocalitiesSlider from "../../Components/PopularLocalitiesSlider"
import "./Plots.scss"
import MediumCard from "../../Components/MediumCard"
import BlogCard from "../../Components/BlogCard";

export default function Plots() {

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
focusOnSelect: true,
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

  const expertDealersData = [
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
  ];

  const expertDealersProData = [
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "Sonu Pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "8",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "Sonu",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "9",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "80",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "khsushi",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "90",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "rhman",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
  ];

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
    <div className="plotContainer">

      <section>
          <div className="container pt-5">
            <div className="row">
              <div className="col pgsOptions overflow-hidden">
                <h2 className=" fw-normal">
                  Plot <span className=" fw-medium">Collections</span>
                </h2>
                <p className=" text-muted">Exclusive showcase of categorized plots</p>
                <div className="row g-3 py-4 text-light">
                  {/* For Guys */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center">
                      <img
                        src="https://c.housingcdn.com/demand/s/client/common/assets/cornerPlots.24f32642.jpg"
                        alt=" Corner Plots"
                        className="img-fluid rounded w-100"
                      />
                    </div>
                  </div>

                  {/* For Girls */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center">
                      <img
                        src="https://c.housingcdn.com/demand/s/client/common/assets/withBoundaryWalls.2a5d1a61.jpg"
                        alt="Boundary Wall Plots"
                        className="img-fluid rounded w-100"
                      />
                    </div>
                  </div>

                  {/* Food Available */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center">
                      <img
                        src="https://c.housingcdn.com/demand/s/client/common/assets/below30Lacs.e683ac99.jpg"
                        alt="Below 30 Lakhs Plots"
                        className="img-fluid rounded w-100"
                      />
                    </div>
                  </div>

                  {/* Private Room */}
                  <div className="col-6 col-md-3">
                    <div className="imgWrapper text-center ">
                      <img
                        src="https://c.housingcdn.com/demand/s/client/common/assets/eastFacing.68e4fcb9.jpg"
                        alt="East Facing Plots"
                        className="img-fluid rounded w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recommendedSellers  my-4 ">
              <div className="container">
                <div className="row pb-4">
                  <div className="col p-0 mx-2">
                    <h2>
                      <span className="opacity-75 fs-3">Recommended</span>{" "}
                      Sellers
                    </h2>
                    <p className="m-0 text-muted">
                      Sellers with complete knowledge about locality and
                      verified listings
                    </p>
                    <img
                      className="imgg"
                      src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                      alt="line"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col p-0 ">
                    {/* <div className="IntermedidateCardContainer"> */}

                    <PopularLocalitiesSlider settings={settings2}>
                      {expertDealersProData.map((rentData, index) => (
                        <div key={index} className="mediumCardWrapper">
                          <NavLink className={" text-decoration-none text-dark"} to={"/agents"}>
                            <MediumCard
                              image={rentData.image}
                              name={rentData.name}
                              address={[rentData.address]}
                              experience={rentData.experience}
                              properties={rentData.properties}
                              pro={rentData.pro}
                            />
                          </NavLink>
                        </div>
                      ))}
                    </PopularLocalitiesSlider>

                    <PopularLocalitiesSlider settings={settings2}>
                      {expertDealersData.map((rentData, index) => (
                        <div key={index} className="">
                          <NavLink className={"text-decoration-none text-dark"} to={"/agents"}>
                            <MediumCard
                              image={rentData.image}
                              name={rentData.name}
                              address={[rentData.address]}
                              experience={rentData.experience}
                              properties={rentData.properties}
                              pro={rentData.pro}
                            />
                          </NavLink>
                        </div>
                      ))}
                    </PopularLocalitiesSlider>
                    {/* {/* </div> */}
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
  )
}
