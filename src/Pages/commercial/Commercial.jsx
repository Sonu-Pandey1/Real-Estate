import { NavLink } from "react-router-dom";
import BasicCard from "../../Components/BasicCard";
import PopularLocalitiesSlider from "../../Components/PopularLocalitiesSlider";
import "./Commercial.scss";
import MediumCard from "../../Components/MediumCard";
import BlogCard from "../../Components/BlogCard";


export default function Commercial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
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

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
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

  const CommercialPropertyData = [
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/07/Top-areas-in-Noida-Extension-for-investment-f.jpg",
      title: "Shop",
      owner: "by Sonu Pandey",
      area: "220 sq.ft / 4.8 p.a.",
      address: "Phase 2, Noida",
      price: "2.0 Cr",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2018/04/Buying-in-a-project-on-a-leasehold-plot-f.jpg",
      title: "Shop",
      owner: "by Sonu",
      area: "220 sq.ft / 4.8 p.a.",
      address: "Phase 2, Noida",
      price: "2.0 Cr",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/02/29105827/Jewar-Airport-No-significant-gains-for-the-property-market-FB-1200x700-compressed.jpg",
      title: "Shop",
      owner: "by Khushboo",
      area: "220 sq.ft / 4.8 p.a.",
      address: "Phase 2, Noida",
      price: "2.0 Cr",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/05/Noida-metro-aqua-line-extension-F.jpg",
      title: "Shop",
      owner: "by rahul sen",
      area: "220 sq.ft / 4.8 p.a.",
      address: "Phase 2, Noida",
      price: "2.0 Cr",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/07/22174727/Everything-home-buyers-need-to-know-about-the-repo-rate-and-how-it-affects-them-FB-1200x700-compressed.jpg",
      title: "Shop",
      owner: "by Sonu Pandey",
      area: "220 sq.ft / 4.8 p.a.",
      address: "Phase 2, Noida",
      price: "2.0 Cr",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/02/Mahindra-Lifespaces-launches-plotted-development-project-in-Chennai-f.jpg",
      title: "Shop",
      owner: "by Sonu Pandey",
      area: "220 sq.ft / 4.8 p.a.",
      address: "Phase 2, Noida",
      price: "2.0 Cr",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/05/Godrej-Properties-achieves-over-Rs-2000-cr-through-launch-of-Godrej-Jardinia-in-Noida-f.jpg",
      title: "Shop",
      owner: "by Sonu Pandey",
      area: "220 sq.ft / 4.8 p.a.",
      address: "Phase 2, Noida",
      price: "2.0 Cr",
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
    <>
      <div className="commercialPropertyContainer">
        <main className="main">
          <section>
            <div className="container">
              <div className="row">
                <div className="col recentlyAddedForSale mt-5 py-3">
                  <p className=" fs-2">
                    Recently Added Properties{" "}
                    <span className=" fw-medium">for Sale</span>
                  </p>
                  <PopularLocalitiesSlider settings={settings}>
                    {CommercialPropertyData.map(
                      (CommercialPropertyData, index) => (
                        <div key={index} className="">
                          <BasicCard
                            title={CommercialPropertyData.title}
                            image={CommercialPropertyData.image}
                            owner={CommercialPropertyData.owner}
                            address={CommercialPropertyData.address}
                            area={CommercialPropertyData.area}
                            price={CommercialPropertyData.price}
                          />
                        </div>
                      )
                    )}
                  </PopularLocalitiesSlider>
                </div>
              </div>
            </div>
            
          </section>
          
          <section>
            <div className="container">
              <div className="row">
                <div className="col recentlyAddedForRent mt-5 py-3">
                  <p className=" fs-2">
                    Recently Added Properties{" "}
                    <span className=" fw-medium">for Rent</span>
                  </p>
                  <PopularLocalitiesSlider settings={settings}>
                    {CommercialPropertyData.map(
                      (CommercialPropertyData, index) => (
                        <div key={index} className="">
                          <BasicCard
                            title={CommercialPropertyData.title}
                            image={CommercialPropertyData.image}
                            owner={CommercialPropertyData.owner}
                            address={CommercialPropertyData.address}
                            area={CommercialPropertyData.area}
                            price={CommercialPropertyData.price}
                          />
                        </div>
                      )
                    )}
                  </PopularLocalitiesSlider>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col housingExpert mt-5 py-3">
                  <p className=" fs-2">
                    Housing <span className=" fw-medium">Experts</span>
                  </p>
                  <p className=" text-muted">
                    Sellers with complete knowledge about locality and verified
                    listings
                  </p>
                  <PopularLocalitiesSlider settings={settings2}>
                    {expertDealersProData.map((rentData, index) => (
                      <div key={index} className="mediumCardWrapper">
                        <NavLink
                          className={" text-decoration-none text-dark"}
                          to={"/agents"}
                        >
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

                  {/* <PopularLocalitiesSlider settings={settings2}>
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
                    </PopularLocalitiesSlider> */}
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
        </main>
      </div>
    </>
  );
}
