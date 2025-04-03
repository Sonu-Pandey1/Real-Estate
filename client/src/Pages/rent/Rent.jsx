import "./Rent.scss";
import BasicCard from "../../Components/BasicCard";
import PopularLocalitiesSlider from "../../Components/PopularLocalitiesSlider";
import IntermedidateCard from "../../Components/IntermedidateCard";
import MediumCard from "../../Components/MediumCard";
import { NavLink } from "react-router-dom";
import BlogCard from "../../Components/BlogCard";
import RegisterToPost from "../../Components/RegisterToPost";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Rent() {
  const { listings, formatPrice, formatSize, capitalize } = useContext(AuthContext)


  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 4,
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

  const recentlyAdded = listings?.map((listing) => ({
    id: listing.id,
    image: listing.images[0] || "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
    title: capitalize(listing.propertyName) || "No Title",
    company: listing.company || "by ESCON INFRA REALTORS",
    description: capitalize(listing.propertyCondition) || "Row",
    location: capitalize(listing.address) + ", " + capitalize(listing.city) + ", " + capitalize(listing.state) || "Unknown Location",
    size: formatSize(listing.size) || "N/A",
    price: formatPrice(listing.price) || "Price on Request",
  })) || [];

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
    <>
      <div className="rentContainer">
        <div className="container">
          <main>
            <section className="recentlyAdded">
              <div className="row pb-4">
                <div className="col">
                  <h2>
                    <span className="opacity-75 fs-3">Recently </span> Added
                  </h2>
                  <p className="m-0">Based on preferences of users like you</p>
                  <img
                    className="imgg"
                    src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                    alt="line"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col p-0">
                  <PopularLocalitiesSlider settings={settings2}>
                    {recentlyAdded.map((recentlyAdded, index) => (
                      <div key={index} className="" >
                        <BasicCard
                          id={recentlyAdded.id}
                          title={recentlyAdded.title}
                          image={recentlyAdded.image}
                          description={recentlyAdded.description}
                          location={recentlyAdded.location}
                          size={recentlyAdded.size}
                          price={recentlyAdded.price}
                        />
                      </div>
                    ))}
                  </PopularLocalitiesSlider>
                </div>
              </div>
            </section>

            <section className="rentbottom">
              <RegisterToPost />
            </section>

            <section className="featuredCollections mt-5">
              <div className="row">
                <div className="col">
                  <h2>
                    <span className="opacity-75 fs-3">Featured</span>{" "}
                    Propertys
                  </h2>
                  <p className="m-0">Handpicked Propertys for you</p>
                  <img className="imgg"
                    src="https://masaischool.com/images/new-homepage/yellow-vector.svg" alt="line" />
                </div>
              </div>

              <div className="row">
                <div className="col p-0">
                  <PopularLocalitiesSlider settings={settings}>
                    {recentlyAdded.map((recentlyAdded, index) => (
                      <div key={index} className="" >
                        <BasicCard
                          id={recentlyAdded.id}
                          title={recentlyAdded.title}
                          image={recentlyAdded.image}
                          description={recentlyAdded.description}
                          location={recentlyAdded.location}
                          size={recentlyAdded.size}
                          price={recentlyAdded.price}
                        />
                      </div>
                    ))}
                  </PopularLocalitiesSlider>
                </div>
              </div>
            </section>

            <section className="recommendedSellers   mt-3">
              <div className="container">
                <div className="row pb-4">
                  <div className="col p-0">
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
                          <NavLink className={"navlink"} to={"/agents"}>
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
                          <NavLink className={"navlink"} to={"/agents"}>
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
          </main>

          <article>
            <section className="NewsArticles mt-3">
              <div className="row">
                <div className="col pb-4">
                  <h2>
                    <span className="opacity-75 fs-3">News &</span> Articles
                  </h2>
                  <p className="m-0">Know what`s happening in Real Estate.</p>
                  <div className="imgWrapper">
                    <img
                      className="imgg"
                      src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                      alt="line"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col mb-3">
                  <PopularLocalitiesSlider settings={settings2}>
                    {blogData.map((blogData, index) => (
                      <div key={index} className="">
                        <NavLink className={"navlink"} to={"/news-articles"}>
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
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
